# useForm

```tsx
import * as React from "react";
import { useForm } from "@/hooks/useForm";

const App = (): React.ReactElement => {
    type Form = {
        email: string;
        password: string;
    };

    const [{ email, password }, handleChange, handleSubmit] = useForm<Form>(
        { email: "", password: "" },
        (data: Form): void => {
            console.log(data);
        }
    );

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    type="email"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={handleChange}
                    id="password"
                    name="password"
                    type="password"
                />
            </div>
        </form>
    );
};
```


