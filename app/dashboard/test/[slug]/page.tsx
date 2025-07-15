import React from 'react'
import { useRouter } from 'next/router'
import {motion} from 'framer-motion';
const page = () => {

  const router=useRouter();
  const test_id= router.query.slug;
  // get the questions and answers from the database using the test_id
  // say you got the structure of test 
  // test_name
  // test_theme
  // questions
  // answers
  // points

  return (
    <div> 
         <motion.div>
          {test_name}
         </motion.div>
         <motion.p>
          {theme}
         </motion.p>
         <motion.p>
          Test Details:
          Negative points per question: {negative_per_question}
          Positive points per question:{positive_per_question}
         </motion.p>

         <motion.div className='rounded-md  border-[#292929]'>
          {
            questions.map(
              (q,idx)=>{
                <motion.p className='' key={idx}>
                  Q.{idx+1}. {q.question}
                  <motion.div>
                    {
                      q.options.map(
                        (option,idx)=>{
                          return(
                            <motion.p>
                              {idx+1} . {option}
                            </motion.p>
                          )
                        }
                      )
                    }
                    
                  </motion.div>
                </motion.p>
              }
            )
          }
         </motion.div>

    </div>
  )
}

export default page