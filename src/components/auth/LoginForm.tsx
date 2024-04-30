import React from "react";
import { LoginSchema } from "@/schemas/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod'
import { Card } from "../ui/card";
import { Form } from "../ui/form";

export default function LoginForm() {
  const form = useForm<z.infer <typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return <Card>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} >

      </form>
    </Form>
  </Card>;
}
