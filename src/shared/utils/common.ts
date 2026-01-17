export const generateSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // replace spaces with dashes
    .replace(/[^a-z0-9-]/g, "") // remove invalid characters
    .replace(/-+/g, "-");
