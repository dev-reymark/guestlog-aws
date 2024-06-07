import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Button, Input, Spacer } from "@nextui-org/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Config = ({ auth }) => {
    const [settings, setSettings] = useState({});

    const [form, setForm] = useState({
        company_name: settings.company_name || "",
        website: settings.website || "",
        logo: settings.logo || "",
    });

    useEffect(() => {
        setForm({
            company_name: settings.company_name || "",
            website: settings.website || "",
            logo: settings.logo || "",
        });
    }, [settings]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/config", form);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Configuration
                </h2>
            }
        >
            <Head title="Generate Report" />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 p-4">
                    <form
                        onSubmit={handleSubmit}
                        className="p-4 sm:p-8 bg-white shadow sm:rounded-lg"
                    >
                        <div>
                            <Input
                                label="Company Name"
                                type="text"
                                name="company_name"
                                value={form.company_name}
                                onChange={handleChange}
                            />
                        </div>
                        <Spacer y={2} />
                        <div>
                            <Input
                                label="Website"
                                type="text"
                                name="website"
                                value={form.website}
                                onChange={handleChange}
                            />
                        </div>
                        <Spacer y={2} />
                        <div>
                            <Input
                                label="Logo URL"
                                type="text"
                                name="logo"
                                value={form.logo}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                            <Button color="primary" type="submit">
                                Save
                            </Button>
                            <Button
                                color="secondary"
                                onClick={() =>
                                    Inertia.visit(route("config.index"))
                                }
                            >
                                Edit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Config;
