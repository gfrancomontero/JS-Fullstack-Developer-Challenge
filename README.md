# LastCallMedia Video App

> **Note By Gonzalo**: This README file was formatted by cursor.

This project is a secure, reusable video delivery solution using Next.js, AWS S3, and Vercel. It meets the following requirements:

- **Video Hosting**: The video is securely stored in S3.
- **Authentication**: Access is protected by a username/password and JWT-based validation.
- **Reusable**: Can be applied to any AWS account and GitHub repo by updating credentials.
- **CI/CD**: Automatically rebuilt on repository pushes via Vercel.
- **Security Considerations**: Uses signed URLs, environment variables, and limited AWS permissions for cost efficiency and security.

---

## Why These Choices?

- **Next.js**: Easy setup, server-side rendering, and API routes for authentication and S3 integration.
- **AWS S3**: Reliable, scalable, and inexpensive storage with signed URL support for secure video delivery.
- **Vercel**: Automated builds and seamless integration with GitHub for low-maintenance deployment.
- **JWT Authentication**: Lightweight and secure method for validating user sessions without a database.

---

## Installation and Deployment

1. Clone the repo and install dependencies:

   ```bash
   git clone https://github.com/gfrancomontero/JS-Fullstack-Developer-Challenge.git
   cd JS-Fullstack-Developer-Challenge
   npm install
   ```

2. Set environment variables in `.env.local`:

   ```plaintext
   JWT_SECRET_KEY=k3rfMvOGwc/ZGQQn2153ddEm1nympYMyN9kAXhitnLk=
   AWS_ACCESS_KEY_ID=YOUR_ACCESS_KEY
   AWS_SECRET_ACCESS_KEY=YOUR_SECRET_KEY
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

---

## Future Improvements

1. **Stricter Token Validation**:

   - In production, implement token expiration checks and a refresh mechanism.
   - Store sensitive tokens in secure cookies instead of `localStorage`.

2. **Database Integration**:

   - Replace `users.json` with a robust database for user management.

3. **CI/CD Enhancements**:

   - Automate testing and deployments using GitHub Actions.

4. **Cost Optimization**:

   - Leverage AWS S3 storage classes and lifecycle policies for cost reduction.

5. **Documentation**:

   - Ensure all functions and components are well-documented for easier onboarding of new developers.

6. **Error Handling**:
   - Implement comprehensive error handling and logging for better debugging and user experience.

---

## Deliverables

1. **Deployed URL**: Accessible at [lastcallmedia-video.vercel.app](https://lastcallmedia-video.vercel.app).
2. **Username and Password**: Provided via secure communication.
3. **Forked Repo**: [GitHub Repository](https://github.com/gfrancomontero/JS-Fullstack-Developer-Challenge).
