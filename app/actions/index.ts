"use server";
import { cookies } from "next/headers";
import {createServerActionClient} from '@supabase/auth-helpers-nextjs'
import { z } from "zod";

export async function sellCarAction(prevState: FormData, formData: FormData) {
  //console.log({ formData });

  const schema = z.object({
    ImageURL: z.any(),
    BrandName: z.string().min(3),
    Description: z.string().min(3),
    Price: z.string().min(3),
    CarName: z.string().min(2),
  });

  const formValues = {
    ImageURL: formData.get("ImageURL"),
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

  const image = formValues.ImageURL;
  if (image && image instanceof File) {
    //console.log("Image File:", image);
  }
  
  const {ImageURL,BrandName,Description,CarName,Price} = result.data;
  try {
    const fName = `${Math.random()}-${ImageURL.name}`
    const supabase = createServerActionClient({cookies})
    const { data,error } = await supabase.storage
    .from("autos")
    .upload(fName,ImageURL,{
      cacheControl:"3600",
      upsert: false
    })

    if(error){
      //console.log("This could be issue",error)
      return{
        type:"error",
        message:"Databse error: Faild to uplode image"
      }
    }

    if(data){
      //insert opration
      const path = data.path
      const{error} = await supabase
      .from("autoInTaste")
      .insert({ImageURL:path,BrandName,Description,CarName,Price})
      //console.log("here:",{ImageURL:path,BrandName,Description,CarName,Price})
    }

  } catch (error) {
    //console.error("error",error)
    return {
      type: "error",
      message: "Database error: Failed to create",
    };
  }
  

  return {
  type: "success",
  message: "Car added to the list",};

}
