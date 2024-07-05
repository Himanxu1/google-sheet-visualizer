To run this project locally you have to create a service-account-key.json file in the backend root folder and add the following content . this is secret content which is prohibited by git to be 
pushed into github .

NOTE : Don't misuse it .
paste this into service-account-key.json file

{
  "type": "service_account",
  "project_id": "ferrous-amphora-428506-u8",
  "private_key_id": "cffbaba74b8c519b391cfc44ec28b0fa67ad4dcc",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfKygPpNTI1IOb\nvTTu0B7gL33Z9Dq204+JxUgzlYGJyp8dKl5hZuiciX/WNcjwA51XQo/uKH3IHPmt\nhPNWeslQM3UpzetDWu98dgIzZWPcSmIYOaN/Lc4ASI4Lv9YRnqRKJ6OSt0n5Xn6m\n9CBAEB5xADya+eSDj/xpO88k4zuQSS0wSm6KS1yVo7H6AyLH7o1X1E3ebHCuIMdf\nxpoQBfaCQDhJzVBiu8FbMraiJIdIv+GL51JQlztkNZL6/hC6kKdElANWSyghXtNV\n8eHpXZVL7DEyCZA2ALjSy22WraS9yHKPNtnpY1ur21KUM2lpSHAubUdcKPT7KoYN\nySc3w8sHAgMBAAECggEALz+x5DbzfWxsZwpbELtSNw2SB+WymjwiI20fWkS6z+sI\nobFGlBZm3bUJcE7GB82i4tjc/f8iG4nSajqJu7W2Ver4kEDS4ks3xVQIojYqVyXz\niapuiN3RhY8EL6OySce0kFjE+1QSjwaIhUn52tqOFtBRrVWaCp3u+VQqURJtR46h\nF3Yiy21SbEjnmnO/n1l3OlWi7x65GhIwtpxtOfYaca0VTG4wIhgLLgr8RLXm4KzJ\neAfG8Tnl0+ufCo3xsSCTKyiS3BpBTP+3Db5n7NB/cbuEB0hMu8TOv7XwpatFsB3C\ne+WJgO7lL0PPfXW8RIYm58yW4UKy8JoeOeKjfMKNWQKBgQDdBUSDp8vLD3yutqBQ\nxTX5/r6ifaMs1yebRtDJdaYegH3I7cxGu06rs8U4HpU/fH2xKWSLwDwWOuiv+w7K\nFZUI4LQXVPEFba0YTXzO0hUM1jXnz0VGqacTtnLGBABkGOa+qeJjRnf9qajVxaLm\nQLeOBDKE0OffFx035DhAyNGkCQKBgQC4W+6Jj4X1hhUQwnNNCC/3IMeKnZdo2GWw\nplnRcKmzC+Db1a2W817Uc1KlWz7A29zjy7g76+ymKsZZvKI1IrZ2+ePAOteD0WMa\n/QQkgP1nyi+q5w42vkZICZsETxZLnry0gyGctJzmKxT+vAHprsSlG7cfV7JUFRuN\nVpdMCo5ajwKBgECXtoNHeZ6ZoxWoV8fjKrgqA+qXDyYepvuRQZlu4aKOaLRdEtMl\nEIPLoPqarYGFT3KEJ1dUUfspMjGkDJlwn0Kd8OPUti+g8vJkSvJioTZEMDLT92oE\nUMjJDFfkeXzHbkAQhBIBWTXv7GC1RrtF9J7ziRQZvXoMVkSsVOhSCDqJAoGBAJUy\n4TM2keUHpBiyJXnb/GV1g8dsjlJtfq6dkebr1IpwPIPsw9V8E+y/f80OsRSHWpaI\nEgt8fUJlL60D+goik6Rpy6WQeUXWuOvog+e+9FWAzV70Kw6mol4+V9P+5T5Bstor\nnZIioS+tAgq9wJaLt90fNu4InOtrQab6wurpSBeFAoGBALd0kR8orxyc1zOn/Oic\n1gO3wp4EPYg/qeAjxsTQg9xX1fWT0p73vmiPdPle8jrHiseDmnQz98IGt0D+Lljy\nM9T9vYFm7DujtiykPwMeeC+2sSc5NexdhM9NnQuA9Ozmrf1nb4mfzqo6V6NInyEE\nMoA3niD6mLhei//x5jTJY9Jf\n-----END PRIVATE KEY-----\n",
  "client_email": "google-sheet-service@ferrous-amphora-428506-u8.iam.gserviceaccount.com",
  "client_id": "109699480303434634444",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/google-sheet-service%40ferrous-amphora-428506-u8.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

also add a google sheet Id in the .env file 
SPREADSHEETID = 'YOUR_GOOGLE_SHEET_ID'

