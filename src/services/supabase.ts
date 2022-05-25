import {createClient} from '@supabase/supabase-js'

const SUPABASE_URL = 'https://tapgzclseytefzebvsde.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhcGd6Y2xzZXl0ZWZ6ZWJ2c2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1MDQ1MDIsImV4cCI6MTk2OTA4MDUwMn0.yTeEZN4q9Dm3Y1FdjrSJ33OTELOV50keizT7xz7sd2A'

const supabase = createClient(
    SUPABASE_URL,
    API_KEY
)

export default supabase