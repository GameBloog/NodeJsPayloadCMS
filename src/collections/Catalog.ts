import { isLoggedIn } from "../access/isLoggedIn"
import { isAdminOrSelf } from "../access/isAdminOrSelf"
import { CollectionConfig } from "payload/types"
import Users from "./Users"
import { isAdminOrCreator } from "../access/isAdminOrCreator"

const Catalog: CollectionConfig = {
  slug: "catalog",
  auth: false,
  admin: {
    useAsTitle: "title",
  },

  access: {
    create: isAdminOrSelf,
    read: isAdminOrCreator,
    update: isAdminOrSelf,
    delete: isAdminOrSelf,
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

    {
      name: "createdBy",
      type: "relationship",
      relationTo: "users",
      required: false,
      hidden: true,
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, req }) => {
        if (req.user) {
          data.createdBy = req.user.id
        }

        return data
      },
    ],
  },
}

export default Catalog
