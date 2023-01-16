// import { useState } from "react"
// import { useNavigation } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, Paper } from "@mui/material"
const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius:20,
      pl:2,
      border:'1px solid #f3f3f3',
      boxShadow: 'none',
      mr: {sm: 5}
    }}
    >
      <input
      className="search-bar"
      placeholder="Search......"
      value=""
      onChange={() => {}}
      />
<IconButton
type='submit'
sx={{
  p:'10px', color: 'red'
}}>
  <SearchIcon/>
</IconButton>
  </Paper>
  )
}

export default SearchBar