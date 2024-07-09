import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  username: "";
  password: "";
}

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form
      className="w-max h-max form-control border-8 border-slate-500 rounded flex flex-col items-center p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("username", { required: true, minLength: 3 })}
        id="username"
        type="text"
        placeholder="Username"
        className="input input-bordered input-primary w-full max-w-xs m-4"
      />
      {errors.username?.type === "required" && (
        <p className="text-red-600">Name field required!</p>
      )}
      {errors.username?.type === "minLength" && (
        <p className="text-red-600">Minimum three characters!</p>
      )}
      <input
        {...register("password", { required: true, minLength: 7 })}
        id="password"
        type="password"
        placeholder="Password"
        className="input input-bordered input-primary w-full max-w-xs m-4"
      />
      {errors.password?.type === "required" && (
        <p className="text-red-600">Password is required!</p>
      )}
      {errors.password?.type === "minLength" && (
        <p className="text-red-600">
          Password must be a minimum of 7 characters
        </p>
      )}
      <button className="btn btn-active btn-primary">Submit</button>
    </form>
  );
};

export default UserForm;
