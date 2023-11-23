import Head from "next/head";
import styles from "./contact.module.scss";

import { VStack, Stack, Text, Input, Button, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, // catch error messages
  } = useForm();

  function submitHandler(data) {
    const apiUrl = "/api/sheet";
    console.log("API URL:", apiUrl);
    fetch("/api/sheet", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    reset(); // clears the input on submitting
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <h1>Solicita tu clase de prueba</h1>
      </div>

      <div className={styles.main}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className={styles.submitHandler}
        >
          <Input
            className={styles.singleInput}
            placeholder="Nombre completo"
            variant="filled"
            name="name"
            mt={2}
            {...register("Fullname", {
              required: "Please enter your name",
            })}
          />
          <Input
            className={styles.singleInput}
            placeholder="Numero de documento"
            variant="filled"
            name="name"
            mt={2}
            {...register("Id", {
              required: "Please enter your Surname",
            })}
          />
          {errors.Name && errors.Name.message}
          <Input
            className={styles.singleInput}
            placeholder="Telefono"
            variant="filled"
            mt={3}
            {...register("Phone", { required: "Enter your feedback!" })}
          />
          <Input
            className={styles.singleInput}
            placeholder="Email"
            variant="filled"
            mt={3}
            {...register("Email", { required: "Enter your feedback!" })}
          />
          {errors.Feedback && errors.Feedback.message}
          <Button
            className={styles.btn}
            colorScheme="teal"
            bg={"gray.500"}
            textColor={"white"}
            _hover={{
              bgColor: "pink.200",
              textColor: "gray.900",
            }}
            type="submit"
            mt={2}
            variant="ghost"
          >
            ENVIAR
          </Button>
        </form>
      </div>
    </div>
  );
}
