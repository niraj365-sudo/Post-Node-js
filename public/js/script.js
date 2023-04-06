(function() {
  $(function() {
    $(".login--container").removeClass("preload");
    this.timer = window.setTimeout(() => {
      return $(".login--container").toggleClass("login--active");
    }, 2000);
    return $(".js-toggle-login").click(() => {
      window.clearTimeout(this.timer);
      $(".login--container").toggleClass("login--active");
      return $(".login--username-container input").focus();
    });
  });

}).call(this);




//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFBLENBQUUsUUFBQSxDQUFBLENBQUE7SUFDQSxDQUFBLENBQUUsbUJBQUYsQ0FBc0IsQ0FBQyxXQUF2QixDQUFtQyxTQUFuQztJQUNBLElBQUMsQ0FBQSxLQUFELEdBQVMsTUFBTSxDQUFDLFVBQVAsQ0FBa0IsQ0FBQSxDQUFBLEdBQUE7YUFDekIsQ0FBQSxDQUFFLG1CQUFGLENBQXNCLENBQUMsV0FBdkIsQ0FBbUMsZUFBbkM7SUFEeUIsQ0FBbEIsRUFFUCxJQUZPO1dBSVQsQ0FBQSxDQUFFLGtCQUFGLENBQXFCLENBQUMsS0FBdEIsQ0FBNEIsQ0FBQSxDQUFBLEdBQUE7TUFDMUIsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsSUFBQyxDQUFBLEtBQXJCO01BQ0EsQ0FBQSxDQUFFLG1CQUFGLENBQXNCLENBQUMsV0FBdkIsQ0FBbUMsZUFBbkM7YUFDQSxDQUFBLENBQUUsa0NBQUYsQ0FBcUMsQ0FBQyxLQUF0QyxDQUFBO0lBSDBCLENBQTVCO0VBTkEsQ0FBRjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJCAtPlxuICAkKFwiLmxvZ2luLS1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJwcmVsb2FkXCIpXG4gIEB0aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0ID0+XG4gICAgJChcIi5sb2dpbi0tY29udGFpbmVyXCIpLnRvZ2dsZUNsYXNzKFwibG9naW4tLWFjdGl2ZVwiKVxuICAsIDIwMDBcblxuICAkKFwiLmpzLXRvZ2dsZS1sb2dpblwiKS5jbGljayA9PlxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoQHRpbWVyKVxuICAgICQoXCIubG9naW4tLWNvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImxvZ2luLS1hY3RpdmVcIilcbiAgICAkKFwiLmxvZ2luLS11c2VybmFtZS1jb250YWluZXIgaW5wdXRcIikuZm9jdXMoKVxuICAgICJdfQ==
//# sourceURL=coffeescript