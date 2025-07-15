import React from 'react'
import {motion} from 'framer-motion';
import { libre_caslon_display } from '@/lib/fonts';
import { Button } from '@/components/ui/Button';
import Copyright from '@/components/Copyright';

const TestRow=({test_no,test_name,status}:{test_no:number,test_name:string, status:string})=>{

  return (
    <div>
      <motion.p>
        {test_no} .
      </motion.p>
      <motion.p>
        {test_name}
      </motion.p>
      {
        status==="expired"
        ?
          <Button disabled variant='ghost'>Expired</Button>
        : 
        status ==="completed"
        ? 
          <Button disabled variant='ghost'>Completed</Button>
        : 
        status==="active" 
        ?
        <Button variant='ghost'>Start</Button>
        :
        <Button disabled variant='ghost'>Not Active</Button>
      }
    </div>
  )
}

const page = () => {
  const tests=[
    {
      test_no:1,
      test_name:"The Mirror",
      status:"expired"
    },
    {
      test_no:2,
      test_name:"You vs You",
      status:"completed"
    },
    {
      test_no:3,
      test_name:"The Beast Mode",
      status:"active"
    }
  ]
  return (
    <div>
       <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`mt-40 flex items-center justify-center ${libre_caslon_display.className} text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full h-20 sm:h-24 md:h-32 lg:h-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl`}
      >
      TEST
      </motion.div>
      {
        tests.map(
          (test,index)=>{
            return (
              <TestRow {...test} key={index}></TestRow>
            )
          }
        )
      }

      <Copyright></Copyright>

    </div>
  )
}

export default page