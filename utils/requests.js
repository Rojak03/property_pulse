const apiDomian = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//fetch all properties
async function fetchProperties() {
  try {
    // handle domain avilablity
    if (!apiDomian) {
      return [];
    }
    const res = await fetch(`${apiDomian}/properties`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch -data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

//Fetch single property
async function fetchProperty(id) {
  try {
    // handle domain avilablity
    if (!apiDomian) {
      return null;
    }
    const res = await fetch(`${apiDomian}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch -data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
