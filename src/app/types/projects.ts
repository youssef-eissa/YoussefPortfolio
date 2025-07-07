import { StaticImageData } from "next/image"

export type projectType={
    id:number,
    title:string,
    image:StaticImageData,
    tags:string[],
    description:string,
    link:string
}