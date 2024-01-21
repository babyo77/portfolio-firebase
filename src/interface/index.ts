interface Date{
    seconds:number,
    nanoseconds:number
}
interface StoriesSrc{
    thumbnail_link:string,
    download_link:string,
}
interface User{
    id:string,
    username:string,
    name:string,
    bio:string,
    story:string,
    date:Date,
    techStack:string[],
    projects:ProjectProps[],
    github:string,
    twitter:string,
}
interface ProjectProps {
    link: string;
    title: string;
    desc: string;
    tech: string[];
  }
  


export type {User,StoriesSrc,ProjectProps}