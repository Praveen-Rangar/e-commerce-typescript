import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../../Components/Input";

const SignUpPage = () => {
  const handleSubmit = (values: any) => {
    console.log("username", values);
  };

  const schema = Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(6),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  return (
    <section className="text-gray-600 body-font relative">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              SignUp
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <Input
                id="username"
                name="username"
                label="username"
                type="text"
                autoComplete="true"
              />

              <Input
                id="email"
                label="email"
                autoComplete="true"
                type="email"
                name="email"
              />

              <Input
                id="password"
                label="Password"
                autoComplete="true"
                type="password"
                name="password"
              />

              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default SignUpPage;
