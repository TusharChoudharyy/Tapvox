import React, { useRef, useCallback, useState, useEffect } from 'react';
import './QuillEditor.css';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  disabled?: boolean;
  height?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Start writing...',
  disabled = false,
  height = '300px'
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState({
    bold: false,
    italic: false,
    underline: false,
    h1: false,
    h2: false,
    h3: false,
    ul: false,
    ol: false,
    justifyLeft: false,
    justifyCenter: false,
    justifyRight: false,
  });

  // Insert table
  const insertTable = useCallback(() => {
    const rows = parseInt(prompt("Number of rows?", "2") || "2", 10);
    const cols = parseInt(prompt("Number of columns?", "2") || "2", 10);

    if (rows > 0 && cols > 0) {
      let table = "<table border='1' style='border-collapse: collapse; width:100%;'>";
      for (let i = 0; i < rows; i++) {
        table += "<tr>";
        for (let j = 0; j < cols; j++) {
          table += "<td style='padding:8px; border:1px solid #000;'>Cell</td>";
        }
        table += "</tr>";
      }
      table += "</table><br/>";

      document.execCommand("insertHTML", false, table);

      if (editorRef.current) {
        onChange(editorRef.current.innerHTML);
      }
    }
  }, [onChange]);

  // Table actions
  const modifyTable = useCallback((action: string) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    let cell = selection.anchorNode as HTMLElement | null;
    while (cell && cell.tagName !== "TD" && cell.tagName !== "TH") {
      cell = cell.parentElement;
    }

    if (!cell) return;

    const row = cell.parentElement as HTMLTableRowElement;
    const table = row.parentElement?.parentElement as HTMLTableElement;

    if (!row || !table) return;

    switch (action) {
      case "addRow":
        const newRow = row.cloneNode(true) as HTMLTableRowElement;
        newRow.querySelectorAll("td").forEach(td => (td.innerHTML = "Cell"));
        row.parentElement?.insertBefore(newRow, row.nextSibling);
        break;

      case "deleteRow":
        row.parentElement?.removeChild(row);
        break;

      case "addCol":
        table.querySelectorAll("tr").forEach(tr => {
          const newCell = document.createElement("td");
          newCell.style.border = "1px solid #000";
          newCell.style.padding = "8px";
          newCell.innerText = "Cell";
          tr.appendChild(newCell);
        });
        break;

      case "deleteCol":
        const index = Array.from(row.children).indexOf(cell);
        table.querySelectorAll("tr").forEach(tr => {
          tr.removeChild(tr.children[index]);
        });
        break;

      case "deleteTable":
        table.remove();
        break;

      default:
        break;
    }

    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  }, [onChange]);

  // Change table border color
const changeTableBorderColor = useCallback((color: string) => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  let cell = selection.anchorNode as HTMLElement | null;
  while (cell && cell.tagName !== "TD" && cell.tagName !== "TH") {
    cell = cell.parentElement;
  }

  if (!cell) return;

  const table = cell.closest("table");
  if (!table) return;

  (table as HTMLTableElement).style.border = `2px solid ${color}`;
  table.querySelectorAll("td").forEach(td => {
    (td as HTMLTableCellElement).style.border = `1px solid ${color}`;
  });

  if (editorRef.current) {
    onChange(editorRef.current.innerHTML);
  }
}, [onChange]);




  // Update toolbar state
  const updateToolbarState = useCallback(() => {
    if (!editorRef.current) return;

    setIsActive({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      h1: document.queryCommandValue('formatBlock') === 'h1',
      h2: document.queryCommandValue('formatBlock') === 'h2',
      h3: document.queryCommandValue('formatBlock') === 'h3',
      ul: document.queryCommandState('insertUnorderedList'),
      ol: document.queryCommandState('insertOrderedList'),
      justifyLeft: document.queryCommandState('justifyLeft'),
      justifyCenter: document.queryCommandState('justifyCenter'),
      justifyRight: document.queryCommandState('justifyRight'),
    });
  }, []);

  // Execute command
  const execCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    updateToolbarState();

    // Trigger onChange
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  }, [onChange, updateToolbarState]);

  // Handle content change
  const handleInput = useCallback(() => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
    updateToolbarState();
  }, [onChange, updateToolbarState]);

  // Handle selection change
  const handleSelectionChange = useCallback(() => {
    updateToolbarState();
  }, [updateToolbarState]);

  // Set initial content
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  // Add event listeners
  useEffect(() => {
    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [handleSelectionChange]);

  // Insert image
  const insertImage = useCallback(() => {
    const url = prompt('Enter image URL:');
    if (url) {
      execCommand('insertImage', url);
    }
  }, [execCommand]);

  // Insert link
  const insertLink = useCallback(() => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  }, [execCommand]);

  // Change font size
  const changeFontSize = useCallback((size: string) => {
    execCommand('fontSize', size);
  }, [execCommand]);

  // Change font color
  const changeFontColor = useCallback((color: string) => {
    execCommand('foreColor', color);
  }, [execCommand]);

  // Change background color
  const changeBackgroundColor = useCallback((color: string) => {
    execCommand('backColor', color);
  }, [execCommand]);

  return (
    <div className="rich-text-editor">
      {/* Toolbar */}
      <div className="rte-toolbar">
        {/* Text Formatting */}
        <div className="toolbar-group">
          <button
            type="button"
            className={`toolbar-btn ${isActive.bold ? 'active' : ''}`}
            onClick={() => execCommand('bold')}
            title="Bold (Ctrl+B)"
            disabled={disabled}
          >
            <strong>B</strong>
          </button>
          <button
            type="button"
            className={`toolbar-btn ${isActive.italic ? 'active' : ''}`}
            onClick={() => execCommand('italic')}
            title="Italic (Ctrl+I)"
            disabled={disabled}
          >
            <em>I</em>
          </button>
          <button
            type="button"
            className={`toolbar-btn ${isActive.underline ? 'active' : ''}`}
            onClick={() => execCommand('underline')}
            title="Underline (Ctrl+U)"
            disabled={disabled}
          >
            <u>U</u>
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => execCommand('strikeThrough')}
            title="Strikethrough"
            disabled={disabled}
          >
            <s>S</s>
          </button>
        </div>

        {/* Headings */}
        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => execCommand('formatBlock', 'p')}
            title="Paragraph"
            disabled={disabled}
          >
            P
          </button>
          <button
            type="button"
            className={`toolbar-btn ${isActive.h1 ? 'active' : ''}`}
            onClick={() => execCommand('formatBlock', 'h1')}
            title="Heading 1"
            disabled={disabled}
          >
            H1
          </button>
          <button
            type="button"
            className={`toolbar-btn ${isActive.h2 ? 'active' : ''}`}
            onClick={() => execCommand('formatBlock', 'h2')}
            title="Heading 2"
            disabled={disabled}
          >
            H2
          </button>
          <button
            type="button"
            className={`toolbar-btn ${isActive.h3 ? 'active' : ''}`}
            onClick={() => execCommand('formatBlock', 'h3')}
            title="Heading 3"
            disabled={disabled}
          >
            H3
          </button>
        </div>

        {/* Lists */}
        <div className="toolbar-group">
          <button
            type="button"
            className={`toolbar-btn ${isActive.ul ? 'active' : ''}`}
            onClick={() => execCommand('insertUnorderedList')}
            title="Bullet List"
            disabled={disabled}
          >
            • List
          </button>
          <button
            type="button"
            className={`toolbar-btn ${isActive.ol ? 'active' : ''}`}
            onClick={() => execCommand('insertOrderedList')}
            title="Numbered List"
            disabled={disabled}
          >
            1. List
          </button>
        </div>

        {/* Alignment */}
        <div className="toolbar-group">
          <button
            type="button"
            className={`toolbar-btn ${isActive.justifyLeft ? 'active' : ''}`}
            onClick={() => execCommand('justifyLeft')}
            title="Align Left"
            disabled={disabled}
          >
            ⬅
          </button>
          <button
            type="button"
            className={`toolbar-btn ${isActive.justifyCenter ? 'active' : ''}`}
            onClick={() => execCommand('justifyCenter')}
            title="Align Center"
            disabled={disabled}
          >
            ↔
          </button>
          <button
            type="button"
            className={`toolbar-btn ${isActive.justifyRight ? 'active' : ''}`}
            onClick={() => execCommand('justifyRight')}
            title="Align Right"
            disabled={disabled}
          >
            ➡
          </button>

        </div>
        <div className="toolbar-group">
          <button type="button" className="toolbar-btn" onClick={insertTable}>
            📊 Table
          </button>
          <button type="button" className="toolbar-btn" onClick={() => modifyTable("addRow")}>
            ➕ Row
          </button>
          <button type="button" className="toolbar-btn" onClick={() => modifyTable("deleteRow")}>
            ❌ Row
          </button>
          <button type="button" className="toolbar-btn" onClick={() => modifyTable("addCol")}>
            ➕ Col
          </button>
          <button type="button" className="toolbar-btn" onClick={() => modifyTable("deleteCol")}>
            ❌ Col
          </button>
          <button type="button" className="toolbar-btn" onClick={() => modifyTable("deleteTable")}>
            🗑 Table
          </button>
           <input
    type="color"
    className="toolbar-color"
    title="Table Border Color"
    onChange={(e) => changeTableBorderColor(e.target.value)}
  />
        </div>


        {/* Font Controls */}
        <div className="toolbar-group">
          <select
            onChange={(e) => changeFontSize(e.target.value)}
            className="toolbar-select"
            disabled={disabled}
            defaultValue="3"
          >
            <option value="1">10px</option>
            <option value="2">13px</option>
            <option value="3">16px</option>
            <option value="4">18px</option>
            <option value="5">24px</option>
            <option value="6">32px</option>
            <option value="7">48px</option>
          </select>

          <input
            type="color"
            onChange={(e) => changeFontColor(e.target.value)}
            className="toolbar-color"
            title="Text Color"
            disabled={disabled}
          />

          <input
            type="color"
            onChange={(e) => changeBackgroundColor(e.target.value)}
            className="toolbar-color"
            title="Background Color"
            disabled={disabled}
          />
        </div>

        {/* Insert Elements */}
        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={insertLink}
            title="Insert Link"
            disabled={disabled}
          >
            🔗
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={insertImage}
            title="Insert Image"
            disabled={disabled}
          >
            🖼
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => execCommand('insertHorizontalRule')}
            title="Insert Horizontal Rule"
            disabled={disabled}
          >
            ―
          </button>
        </div>

        {/* Utilities */}
        <div className="toolbar-group">
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => execCommand('undo')}
            title="Undo (Ctrl+Z)"
            disabled={disabled}
          >
            ↶
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => execCommand('redo')}
            title="Redo (Ctrl+Y)"
            disabled={disabled}
          >
            ↷
          </button>
          <button
            type="button"
            className="toolbar-btn"
            onClick={() => execCommand('removeFormat')}
            title="Clear Formatting"
            disabled={disabled}
          >
            🧹
          </button>
        </div>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        className="rte-content"
        contentEditable={!disabled}
        onInput={handleInput}
        onKeyUp={updateToolbarState}
        onMouseUp={updateToolbarState}
        style={{ minHeight: height }}
        data-placeholder={placeholder}
        suppressContentEditableWarning={true}
      />
    </div>
  );
};

export default RichTextEditor;
