export const getCanonicalUrl=()=>{
    return process.env.NODE_ENV !== "production" 
    ? "http://localhost:3001"
    : "https://autosshow.vercel.app/"
}
