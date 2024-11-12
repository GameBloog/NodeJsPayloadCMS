import { CollectionConfig } from "payload/types"

const Product: CollectionConfig = {
  slug: "products",
  auth: false,
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },

    {
      name: "description",
      type: "text",
      required: true,
    },

    {
      name: "price",
      type: "number",
      required: true,
    },

    {
      name: "quantity",
      type: "number",
      required: true,
    },

    {
      name: "catalog",
      type: "relationship",
      relationTo: "catalog",
      hidden: true,
    },
  ],
}

export default Product
