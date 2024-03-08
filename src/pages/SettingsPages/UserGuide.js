import MainLayout from "../../Layout/MainLayout";

function UserGuide(){
    return(
        <MainLayout>
        <div className="systemManual">
        <h1> User Manual </h1>
            <hr/>
        <h2> Getting Started on OOTD</h2>
        <p>Just getting started with OOTD? Here are some steps to ensure your brand takes full advantage of the platform right away.
        <li>Sign up for an OOTD account and choose a username that clearly represents your brand.</li>
        <li>Start sharing photos on OOTD for users to view.</li>
        </p>

        <h2> Login</h2>
        <p>With our user-friendly interface, you can easily access your account, create new accounts, and manage your login status. Here's how you can navigate these features:
        <li>Click on "New User?" if you're new to our platform and want to create a fresh account. This will guide you through the process of setting up your account.</li>
        <li>If you're a returning user, simply click on "Already have an account?" to log in. This will allow you to access your existing account and continue your personalized experience.</li>
        <li>If you're currently logged into an account and wish to log out, click on "Sign Out". This will securely log you out of your account and ensure your privacy.</li>
        </p>
        <h2> The Home Page</h2>
        <p>Welcome to the Home Page, where you can discover and engage with posts created by fellow users. Here's how you can navigate and interact with the content:
        <li>Show your appreciation for the content by clicking the "Like" button. Let the creators know you enjoyed their work.</li>
        <li>Engage in discussions and share your thoughts by clicking the "Comment" button. Submit a comment to contribute to the conversation surrounding the post.</li>
        <li>Click on the username to explore the user's account. Discover more about the person behind the posts and connect with them.</li>
        </p>
        <h2> The Create Page</h2>
        <p>On the Create Page, you have the opportunity to share your own content with the community. Follow these steps to create a new post:
        <li>By clicking the "Add" button, you can initiate the post-creation process.</li>
        <li>You will be prompted to select a compatible file from your local device. Pick an image or any other supported file type to use in your post.</li>
        <li>Finalize your post creation by clicking the "Create Post" button. This will publish your post and make it visible to others.</li>
        <li>You can further customize your post by adding links and a caption as needed. Provide additional context or relevant information to make your post more engaging.</li>
        </p>
        <h2> The Profile Page</h2>
        <p>On the Profile Page, you have the ability to personalize your presence on our platform. Here's what you can do:
        <li>To showcase your identity add a profile picture by clicking on the white circle and uploading a profile picture that represents you best.</li>
        <li>Edit your name and bio to provide a brief introduction about yourself. Let others know who you are and what you're passionate about.</li>
        <li>Access a collection of your own posts, conveniently displayed for you to review and manage.</li>
        </p>
        <h2> The Settings Page</h2>
        <p>On the Settings Page, you have the ability to view documentation realting to our project:
        <li>Simply click the link in order to be redirected to the documentation.</li>
        </p>
        <h2> About Us </h2>
        <p>Welcome to the About Us page, where you can learn more about our mission here at OOTD. Additionally, you will find information about the developers behind our platform, including their contact emails for any inquiries you may have. Here's what you can access and connect with our team:
        <li>Discover our mission and the purpose behind our platform. Learn about our vision and how we aim to serve our users.</li>
        </p>
        </div>
    </MainLayout>
    )
}
export default UserGuide;