import { CollectionConfig } from "payload/types"

const Catalog: CollectionConfig = {
  slug: "catalog",
  auth: false,
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },

    {
      name: "products",
      type: "relationship",
      relationTo: "products",
      required: true,
      hasMany: true,
    },
  ],
}

export default Catalog
