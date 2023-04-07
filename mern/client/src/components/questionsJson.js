export const questionsJson = {
  title: "Let's find your next watch!",
  pages: [
    {
      title: "Do you want to watch a Movie or TV Show?",
      elements: [
        {
          type: "checkbox",
          name: "movieOrShow",
          title: "Please select from the list",
          showOtherItem: false,
          isRequired: true,
          choices: ["Movie", "TV Show"],
        },
      ],
    },
    {
      title: "What genres do you like?",
      elements: [
        {
          type: "checkbox",
          name: "genres",
          title: "Please select from the list",
          isRequired: true,
          choices: [
            "Action",
            "Comedy",
            "Drama",
            "Thriller",
            "Horror",
            "Romance",
            "Documentary",
          ],
        },
      ],
    },
    {
      title: "Rank genres 1-7, from most liked to least",
      elements: [
        {
          type: "ranking",
          name: "name",
          title: "Rank:",
          choices: [
            "Action",
            "Comedy",
            "Drama",
            "Thriller",
            "Horror",
            "Romance",
            "Documentary",
          ],
        },
      ],
    },
    {
      title: "Do you want to watch something before or after 2000?",
      elements: [
        {
          type: "radiogroup",
          name: "name",
          title: "Select one of the choices below:",
          choices: ["Before 2000", "After 2000"],
        },
      ],
    },
  ],
};
