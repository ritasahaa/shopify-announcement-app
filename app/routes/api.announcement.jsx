import Announcement from "../models/Announcement";
import connectMongoDB from "../config/mongodb";
import { authenticate } from "../shopify.server";

export const loader = async () => {
  try {
    await connectMongoDB();

    const announcements = await Announcement.find().sort({
      createdAt: -1,
    });

    return Response.json({
      success: true,
      announcements,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  try {
    await connectMongoDB();

    const data = await request.json();

    const announcement = await Announcement.create({
      text: data.text,
    });

    const result = await admin.graphql(`
mutation {
  metafieldsSet(
    metafields: [
      {
        namespace: "my_app"
        key: "announcement"
        type: "single_line_text_field"
        value: "${data.text}"
        ownerId: "gid://shopify/Shop/101777080596"
      }
    ]
  ) {
    metafields {
      id
      value
    }
    userErrors {
      field
      message
    }
  }
}
`);

console.log(
  "METAFIELD RESULT =>",
  JSON.stringify(await result.json())
);

    return Response.json({
      success: true,
      announcement,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
};