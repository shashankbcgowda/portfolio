<template>
  <div class="banner-container mb-4">
      <img
        src="@/assets/about1.jpeg"
        alt="Banner"
        class="img-fluid w-100"
      />
    </div>
    <div class="container my-5">
      <h2 class="mb-4">Careers</h2>
      <hr />
  
      <div class="text-center py-5">
        <h3 id="resultTitle" class="text-uppercase font-weight-bold">
          Nothing Found
        </h3>
        <p id="resultMessage" class="mt-3">
          It seems we can’t find what you’re looking for. Perhaps searching can
          help.
        </p>
  
        <div class="d-flex justify-content-center mt-4">
          <div class="input-group" style="max-width: 400px">
            <input
              type="text"
              v-model="searchQuery"
              class="form-control"
              placeholder="Search..."
            />
            <button class="btn btn-primary" type="button" @click="performSearch">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: "",
        jobs: [
          "software developer",
          "quality assurance",
          "data analyst",
          "HR Manager",
        ],
      };
    },
    methods: {
      performSearch() {
        const query = this.searchQuery.toLowerCase();
        const resultTitle = document.getElementById("resultTitle");
        const resultMessage = document.getElementById("resultMessage");
  
        const matchedJobs = this.jobs.filter((job) =>
          job.toLowerCase().includes(query)
        );
  
        if (query === "") {
          resultTitle.innerText = "Nothing Found";
          resultMessage.innerText = "Please enter a search term.";
        } else if (matchedJobs.length > 0) {
          resultTitle.innerText = "Results Found";
          resultMessage.innerText = `Found ${matchedJobs.length} job(s): ${matchedJobs.join(
            ", "
          )}`;
        } else {
          resultTitle.innerText = "No Results Found";
          resultMessage.innerText = "Try searching for something else.";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Your CSS here */
  </style>
  