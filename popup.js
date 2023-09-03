const butonclose = document.getElementById('close')

function show()
{
    document.querySelector(".demoObject").classList.add("active");
    document.querySelector(".overlay").classList.add("active");
    butonclose.addEventListener("click", () => {
        document.querySelector(".demoObject").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
      });}

      function show2()
      {
          document.querySelector(".demoObject2").classList.add("active");
          document.querySelector(".overlay").classList.add("active");
          document.getElementById('close2').addEventListener("click", () => {
              document.querySelector(".demoObject2").classList.remove("active");
              document.querySelector(".overlay").classList.remove("active");
            });}