# In a nutshell:

This JS Fullstack Developer Challenge is brought to you by your friends at [Last Call Media](https://www.lastcallmedia.com), it is designed to assess your skills and to see how you solve problems. Please don't spend more than 2 hours working on it, and if you have trouble completing it in that time, don't stress about it - just push up whatever you have. There is no right answer here, and work-in-progress code is fine, as long as you can explain what you were working on afterwards.

You have full access to `us-east-1` and `us-west-2`. Credentials should have been provided separately. You can generate as many as you want but those expire after an hour. If you plug them into `credentials.sh` you'll get credentials back that don't expire.

---

### Your solution should:

- Deploy a Next.JS app that shows a video/screen recording of you summarizing your work on this project.
- The video should be stored in S3.
- Be reusable. It should be possible to apply it to any AWS account and GitHub repo with the necessary credentials
- The site should be rebuilt upon pushes to this repository
- Consider maintainability. The less maintenance it’ll require in the future, the better
- Be fully automated with no steps that need to be completed in the console
- Take security into account. Security is hard and your solution doesn’t need to be perfect. It’s ok to take some shortcuts if you call out what you’d do in production to make it safer
- Be inexpensive

---

### Deliverables:

- A URL that can be accessed from the internet and prompts for a username and password
  - It’s fine if the URL contains an AWS-owned domain or an IP. After authenticating, the Next.JS site should be shown.
- Username and password that we can use to authenticate
- Link to the forked repo containing your solution
- A README with a brief explanation of your solution and anything else you’d like us to know

**Please be prepared to talk about your solution and to help troubleshoot if we can’t make it work**

---

### Extras:

Some basic scaffolding you may find useful is included but please feel free to use other tools if you prefer.

We don't expect you to write the auth stuff. There are lots of examples on GitHub if you'd like to use one of those. [For example](https://gist.githubusercontent.com/jeroenvollenbrock/94edbbc62adc986d6d6a9a3076e66f5b/raw/259840af8dc2408f2be142588e41aebfa76c44b7/aws-cloudfront-basic-auth.js)
