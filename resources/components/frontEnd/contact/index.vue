<template>
  <main class="container-fluid">
    <section class="row text-center mb-5">
      <span class="display-3 fw-bolder">Contact me</span>
      <hr class="border-bottom border-success mb-5" />
    </section>
    <div class="row">
      <section class="col-md-7">
        <div class="lead fw-bolder">Send me a Message</div>
        <div class="container">
          <form autocomplete="off">
            <div class="my-3 my-md-4">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control form-control-sm shadow-none"
                placeholder="Enter your name"
              />
            </div>
            <div class="my-3 my-md-4">
              <label class="form-label">Email</label>
              <input
                type="text"
                class="form-control form-control-sm shadow-none"
                placeholder="Enter your email"
              />
            </div>
            <div class="my-3 my-md-4">
              <label class="form-label">Subject</label>
              <input
                type="text"
                class="form-control form-control-sm shadow-none"
                placeholder="Enter conversation subject"
              />
            </div>
            <div class="my-3 my-md-4">
              <label class="form-label">Message</label>
              <textarea
                class="form-control form-control-sm shadow-none"
                placeholder="Write your message"
              ></textarea>
            </div>
            <div class="my-3 my-md-4 text-center">
              <button type="button" class="btn btn-sm btn-success shadow-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <section class="col-md-5">
        <div class="row">
          <div class="col-md-6">
            <span class="lead fw-bolder">Street Address: </span
            ><span class="lead"
              >North Badda, Badda, Dhaka North City Corporation,
              Dhaka-1212</span
            >
          </div>
          <div class="col-md-6">
            <div class="row my-2">
              <div class="col-md-12">
                <span class="lead fw-bolder">Phone: </span>
                <span class="lead">(+88) 01978167206</span>
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-12">
                <span class="lead fw-bolder">Email: </span>
                <span class="lead">bdshanto@outlook.com</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col position-relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14603.51833132396!2d90.430241!3d23.787302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec9c772dbfdbe98d!2sTanjimul%20Muslimin%20Madrasah!5e0!3m2!1sen!2sbd!4v1640309547550!5m2!1sen!2sbd" class="w-100 rounded"></iframe>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<style scoped>
textarea {
  resize: none;
  height: 10rem;
}
iframe{
    height: 28.125rem;
}
</style>
