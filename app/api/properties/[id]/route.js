import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionuser } from "@/utils/getSessionUser";

//GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const { id } = await params;
    const property = await Property.findById(id);

    if (!property) return new Response("Property Not Found", { status: 404 });

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
//DELETE /api/properties/:id
export const DELETE = async (request, { params }) => {
  try {
    const { id } = await params;
    const sessionUser = await getSessionuser();
    //Check for session
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User Id is requried", { stauts: 401 });
    }
    const { userId } = sessionUser;
    await connectDB();
    const property = await Property.findById(id);

    if (!property) return new Response("Property Not Found", { status: 404 });
    //Verify ownership
    if (property.owner.toString() !== userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    await property.deleteOne();

    return new Response("Property deleted", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
