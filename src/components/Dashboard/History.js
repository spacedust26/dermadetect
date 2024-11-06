import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    sno: "1",
    disease: "Cancer",
    date: "24 jan",
  },
  {
    sno: "1",
    disease: "Cancer",
    date: "24 jan",
  },
  {
    sno: "1",
    disease: "Cancer",
    date: "24 jan",
  },
  {
    sno: "1",
    disease: "Cancer",
    date: "24 jan",
  },
  {
    sno: "1",
    disease: "Cancer",
    date: "24 jan",
  },
  {
    sno: "1",
    disease: "Cancer",
    date: "24 jan",
  },
  {
    sno: "1",
    disease: "Cancer",
    date: "24 jan",
  },
]

export function History() {
  return (
    <Table className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg p-6 my-5" id="history">
      <TableCaption>History of tests</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.No</TableHead>
          <TableHead>Disease</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.sno}</TableCell>
            <TableCell>{invoice.disease}</TableCell>
            <TableCell className="text-right">{invoice.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
