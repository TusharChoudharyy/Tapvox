import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface FormType {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  createdAt: string;
}

const Contact = () => {
  const [list, setList] = useState<FormType[]>([]);
  const backendUrl = import.meta.env.VITE_LOCAL_URL;

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/contact/get-contact');
      if (Array.isArray(response.data)) {
        setList(response.data.reverse());
      } else {
        toast.error("Unexpected data format");
        console.log(response.data);
      }
    } catch (error) {
      console.error("Fetch failed", error);
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-4 text-lg font-semibold text-center'>Contact Form Submissions</p>
      <div className='w-full overflow-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">First Name</TableHead>
              <TableHead className="text-center">Last Name</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Message</TableHead>
              <TableHead className="text-center">Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {list.map((item) => (
              <TableRow key={item._id}>
                <TableCell className="text-center whitespace-nowrap">{item.firstName}</TableCell>
                <TableCell className="text-center whitespace-nowrap">{item.lastName}</TableCell>
                <TableCell className="text-center whitespace-nowrap">{item.email}</TableCell>
                <TableCell className="text-center truncate max-w-[250px]" title={item.message}>
                  {item.message}
                </TableCell>
                <TableCell className="text-center whitespace-nowrap">
                  {new Date(item.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default Contact;
