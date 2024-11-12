export interface Users {
  id: string
  roles?: ("admin" | "editor")[]
  email?: string
}
