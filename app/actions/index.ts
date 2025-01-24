"use server";
import { cookies } from "next/headers";
import {createServerActionClient} from '@supabase/auth-helpers-nextjs'
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function sellCarAction(prevState: FormData, formData: FormData) {
  //console.log({ formData });

  const schema = z.object({
    cname: z.string().min(3),
    model: z.string().min(2),
    description: z.string().min(3),
    price: z.string().min(3),
    speed: z.string().min(2),
    power: z.string().min(2),
    time: z.string().min(2),
    url: z.any(),
    imgs: z.any(),
    imgb: z.any(),
    imgf: z.any(),
    imginf: z.any(),
    imginb: z.any(),
    boost: z.any(),
    logo: z.any(),
    overview: z.string().min(3),
    sound: z.any(),
  });

  const formValues = {
    cname: formData.get("cname"),
    model: formData.get("model"),
    description: formData.get("description"),
    price: formData.get("price"),
    speed: formData.get("speed"),
    power: formData.get("power"),
    time: formData.get("time"),
    url: formData.get("url"),
    imgs: formData.get("imgs"),
    imgb: formData.get("imgb"),
    imgf: formData.get("imgf"),
    imginf: formData.get("imginf"),
    imginb: formData.get("imginb"),
    boost: formData.get("boost"),
    logo: formData.get("logo"),
    overview: formData.get("overview"),
    sound: formData.get("sound"),
  };

  const result = schema.safeParse(formValues);

  if (!result.success) {
    return {
      type: "error",
      errors: result.error.flatten().fieldErrors,
      message: "Failed to create",
    };
  }

  const image = formValues.url;
  if (image && image instanceof File) {
    //console.log("Image File:", image);
  }
  
  const {cname,model,description,price,speed,power,time,url,imgs,imgb,imgf,imginf,imginb,boost,logo,overview,sound,} = result.data;
  try {
    const fName = `${Math.random()}-${url.name}`
    const supabase = createServerActionClient({cookies})
    const { data,error } = await supabase.storage
    .from("autos")
    .upload(fName,url,{
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
      .from("autos")
      .insert({cname,model,description,price,speed,power,time,url:path,imgs,imgb,imgf,imginf,imginb,boost,logo,overview,sound,})
      //console.log("here:",{ImageURL:path,BrandName,Description,CarName,Price})
    }

  } catch (error) {
    console.error("error",error)
    return {
      type: "error",
      message: "Database error: Failed to create",
    };
  }
  
  revalidatePath("/")
  redirect("/")

  // return {
  // type: "success",
  // message: "Car added to the list",};

}
