export interface Users {
  id: string
  email: string
  password: string
  name: string
  roles?: ("admin" | "editor")[]
}
