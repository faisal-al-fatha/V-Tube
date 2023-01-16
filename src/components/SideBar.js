import { Stack } from "@mui/system";
import { categories } from "../utilities/constants";
const selectedCategory = 'New';

const SideBar = () => {
  return (
   <Stack
   direction='row'
   sx={{ overflowY: 'auto', height: {sx:'auto', md: '95%'}, flexDirection: {md: 'column'}}}
   >
{categories.map((category) => ( <button className="category-btn" style={{background: category.name === selectedCategory && '#ff0000', color: 'white'}} key={category.name}>
        <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
        <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
    </button>
))}

   </Stack>
  )
}

export default SideBar