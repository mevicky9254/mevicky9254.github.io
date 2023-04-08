GitHubCalendar(".react-activity-calendar", "mevicky9254");
  
// or enable responsive functionality:
GitHubCalendar(".react-activity-calendar", { responsive: true });

// Use a proxy
GitHubCalendar(".react-activity-calendar", "mevicky9254", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=${mevicky9254}`)
   }
}).then(r => r.text())


  
