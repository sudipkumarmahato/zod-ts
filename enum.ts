import z from "zod";

const userType = z.enum(["admin", "moderator", " customer"]);

type UserType = z.infer<typeof userType>;

const userSchema = z.object({
  name: z.string({
    invalid_type_error: "Name must be a string",
    required_error: "Name is required",
  }),
  type: userType,
});

type User = z.infer<typeof userSchema>;

const user: User = {
  name: "John Doe",
  //   type: "admin",
  type: userType.Enum.admin,
};

const result = userSchema.parse(user);
console.log(result);
