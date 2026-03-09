import {motion} from 'framer-motion'
import { useEffect } from "react";
import { ArrowRightIcon,  EnvelopeIcon ,StarIcon ,CodeBracketIcon } from '@heroicons/react/24/solid';

function Home() {
  useEffect(() => {
    document.title = "Ali | Front-End React Developer";
  }, []);

  return (
    <>
    </>
  );
}

export default Home;