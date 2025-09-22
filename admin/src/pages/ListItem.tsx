import { ListItem } from "@tiptap/extension-list-item";

const CustomListItem = ListItem.extend({
  content: "inline*",
});

export default CustomListItem;