import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionuser } from "@/utils/getSessionUser";

export const dyanmic = "force-dynamic";

export const POST = async (request) => {
  try {
    await connectDB();

    const { propertyId } = await request.json();

    const sessionUser = await getSessionuser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("user Id is requried", { status: 404 });
    }
    const { userId } = sessionUser;

    //Find user in database
    const user = await User.findOne({ _id: userId });
    //Check if property is bookmarked
    let isBookmarked = user.bookmarks.includes(propertyId);

    return new Response(JSON.stringify({ isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
