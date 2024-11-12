import { CollectionConfig } from "payload/types"

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },

    {
      name: "roles",
      saveToJWT: true,
      type: "select",
      defaultValue: ["member"],
      // access:{}

      options: [
        { label: "Admin", value: "admin" },
        { label: "Member", value: "member" },
      ],
    },

    {
      name: "catalog",
      type: "relationship",
      relationTo: "catalog",
      required: false,
      hidden: true,
    },
  ],
}

export default Users
