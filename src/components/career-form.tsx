import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const CareerForm = () => {
  const formSchema = z.object({
    nik: z.string(),
    full_name: z.string().min(2).max(100),
    qualification: z.string(),
    phone_number: z.string().min(11).max(14),
    date_birth: z.date(),
    field_study: z.string(),
    email: z.string().email(),
    pos: z.string(),
    resume: z.any(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      full_name: "",
      phone_number: "",
      field_study: "",
      qualification: "",
      resume: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-8 grid gap-5">
        <FormField
          control={form.control}
          name="nik"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                NIK <span className="text-rose-700">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Identification"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Full Name <span className="text-rose-700">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="What should we call you?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="qualification"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Qualification <span className="text-rose-700">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="">Choose your qualification</SelectItem>
                  <SelectItem value="S3">S3</SelectItem>
                  <SelectItem value="S2">S2</SelectItem>
                  <SelectItem value="S1">S1</SelectItem>
                  <SelectItem value="D3">D3</SelectItem>
                  <SelectItem value="SMA/SMK">SMA/SMK</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date_birth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Date of birth <span className="text-rose-700">*</span>
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "mb-0 flex h-14 w-full items-center rounded-none border-0 border-b bg-transparent px-0 text-left font-normal hover:bg-transparent hover:shadow-none active:scale-100",
                        !field.value && "bg-transparent text-muted-foreground",
                      )}
                    >
                      <span className="text-lg">
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </span>

                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onDayClick={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Phone Number <span className="text-rose-700">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Phone Number"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="field_study"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Field of study <span className="text-rose-700">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: Computer Science, Software Engineering, Accounting"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-rose-700">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Your Email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume/CV</FormLabel>
              <FormControl>
                <Input type="file" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <span className="relative -top-2 text-sm italic text-neutral-500">
          Supported file type : PDF MAX 2MB
        </span>

        <FormField
          control={form.control}
          name="pos"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>
                Your Role <span className="text-rose-700">*</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-x-3"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="backend" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Backend Developer
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="frontend" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Frontend Developer
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="devops" />
                    </FormControl>
                    <FormLabel className="font-normal">DevOps</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-2 rounded bg-neutral-200/60 p-4">
          <ul className="list-inside list-disc text-sm leading-relaxed">
            <li>Pastikan input NIK dengan benar</li>
            <li>
              Submit recruitment hanya dapat dilakukan 1 kali apabila belum
              diproses oleh HRD
            </li>
            <li>
              Pelamar dapat submit kembali apabila recruitment sebelumnya telah
              ditolak oleh HRD
            </li>
            <li>
              Apabila peserta lolos tahap wawancara maka akan dihubungi oleh HRD
            </li>
            <li>Siapkan dokumen CV dan portofolio terbaik anda.</li>
          </ul>
        </div>

        <Button
          type="submit"
          className="mt-2 w-fit p-5 text-foreground hover:text-white"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default CareerForm;
