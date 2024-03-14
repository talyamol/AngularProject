

export class Courses{
    id:number
    name: string
    categoryId: number
    count:number
    dateStart:Date
    syllabus:string[]
    kindCourse:KindCourse
    lecturerId:number
    imageUrl:string

}
export enum KindCourse{
    Zoom,
    Frontal
}