import React, { useState } from 'react';
import MainLayout from "../../Layout/MainLayout";

function SystemsGuide() {
    return (
        <MainLayout>
            <div className="systemManual">
                <h1>System Manual</h1>
                <hr/>
                <h3>Minimum Hardware and Software Requirements:</h3>
                <p>
                    Provide a detailed list of the minimum hardware specifications (e.g., processor, memory, storage) and software requirements (e.g., operating system, browsers) needed to run the system effectively.
                </p>
                <h3>Installation Guide:</h3>
                <p>
                    Include step-by-step instructions on how to install and set up the system. This should cover any necessary software installations, configurations, and initial setup procedures.
                </p>
                <h3>Error Messages and Troubleshooting Guides:</h3>
                <p>
                    Document common error messages or issues that users may encounter during system operation. Provide clear explanations of these messages and offer troubleshooting guides or solutions to help users resolve them.
                </p>
                <h3>Contact Information for Developer Support:</h3>
                <p>
                    Include contact information (such as an email address or phone number) for users to reach out to the system's developers or support team. This information should be easily accessible in case users have questions or encounter undocumented issues.
                </p>
            </div>
        </MainLayout>
    );
}

export default SystemsGuide;
