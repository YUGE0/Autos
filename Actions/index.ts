"use server";
import { z } from "zod";

export async function sellCarAction(prevState: FormData, formData: FormData) {
  console.log({ formData });

  const schema = z.object({
    Image: z.any(),
    BrandName: z.string().min(3),
    Description: z.string().min(3),
    Price: z.string().min(3),
    CarName: z.string().min(2),
  });

  const formValues = {
    Image: formData.get("Image"),
    BrandName: formData.get("BrandName"),
    Description: formData.get("Description"),
    CarName: formData.get("CarName"),
    Price: formData.get("Price"),
  };

  const result = schema.safeParse(formValues);

  if (!result.success) {
    return {
      type: "error",
      errors: result.error.flatten().fieldErrors,
      message: "Failed to create",
    };
  }

  const image = formValues.Image;
  if (image && image instanceof File) {
    console.log("Image File:", image);
  }

    return {
    type: "success",
    message: "Car added to the list",};
}
