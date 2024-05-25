export interface Person {
    name: string,
    age: number,
    email?: string
  }
  
export interface ProfileProps {
    person: Person,
    message: string
}