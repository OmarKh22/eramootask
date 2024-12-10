import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { maqalat, maqalat2, maqalat3 } from '../assets';
import { BiArrowFromLeft, BiArrowToLeft } from 'react-icons/bi';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from 'react-icons/tfi';

const Maqalat = () => {
  return (
    <section>
          <div className='flex justify-between items-end px-28 py-4'>
            <div>
               <div className="flex items-center justify-center ">
                 <TfiArrowCircleRight  className="ml-3 text-[#000000] text-2xl bg-[#ffffff] rounded-full" />
                 <TfiArrowCircleLeft   className="ml-3 text-[#000000] text-2xl bg-[#ffffff] rounded-full" />
               </div>
            </div>
            <div>
            <h2 className='text-[#172A41] font-bold text-xl'> مقالاتنا الأخيرة </h2>
            <p className='text-[#4E657F] font-bold text-xs'> ابق على اطلاع بأحدث أفكارنا </p>
            </div>
          </div>
        <div className="flex items-start justify-between py-10 px-28 m-auto">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               sx={{ height: 140 , objectFit: "contain"}}
              image={maqalat}
             title="green iguana"
           />
      <CardContent>
        <p className='text-[#FFA360] text-xs font-semibold pb-3'>محمد مو 20 أبريل 2024</p>
        <Typography gutterBottom variant="h5" component="div">
           عنوان المدونة هنا 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          في عالم العمليات التجارية الحديثة، يعد نظام نقاط البيع (POS) أكثر من مجرد أداة لمعالجة المعاملات. 
          ,إنها تمثل منصة ديناميكية تتمتع بالقدرة على إحداث ثورة في طريقة عمل الشركات والتفاعل مع العملاء ودفع النمو. ,دعونا نتعمق في الطرق التي لا تعد ولا تحصى والتي يمكن للشركات من خلالها إطلاق العنان للإمكانات الكاملة لأنظمة نقاط البيع الخاصة بها:
        </Typography>
      </CardContent>
      <CardActions>
        <IoIosArrowRoundForward />
        <Button size="small" sx={{ color:"#543883"}}> اقرأ المزيد</Button>
      </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               sx={{ height: 140 }}
              image={maqalat2}
             title="green iguana"
           />
      <CardContent>
         <p className='text-[#FFA360] text-xs font-semibold pb-3'>محمد مو 20 أبريل 2024</p>
        <Typography gutterBottom variant="h5" component="div">
           عنوان المدونة هنا 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          في عالم العمليات التجارية الحديثة، يعد نظام نقاط البيع (POS) أكثر من مجرد أداة لمعالجة المعاملات. 
          ,إنها تمثل منصة ديناميكية تتمتع بالقدرة على إحداث ثورة في طريقة عمل الشركات والتفاعل مع العملاء ودفع النمو. ,دعونا نتعمق في الطرق التي لا تعد ولا تحصى والتي يمكن للشركات من خلالها إطلاق العنان للإمكانات الكاملة لأنظمة نقاط البيع الخاصة بها:
        </Typography>
      </CardContent>
      <CardActions>
        <IoIosArrowRoundForward />
        <Button size="small" sx={{ color:"#543883"}}> اقرأ المزيد</Button>

      </CardActions>
          </Card>


          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               sx={{ height: 140 }}
              image={maqalat3}
             title="green iguana"
           />
      <CardContent>
         <p className='text-[#FFA360] text-xs font-semibold pb-3'>محمد مو 20 أبريل 2024</p>
        <Typography gutterBottom variant="h5" component="div">
           عنوان المدونة هنا 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          في عالم العمليات التجارية الحديثة، يعد نظام نقاط البيع (POS) أكثر من مجرد أداة لمعالجة المعاملات. 
          ,إنها تمثل منصة ديناميكية تتمتع بالقدرة على إحداث ثورة في طريقة عمل الشركات والتفاعل مع العملاء ودفع النمو. ,دعونا نتعمق في الطرق التي لا تعد ولا تحصى والتي يمكن للشركات من خلالها إطلاق العنان للإمكانات الكاملة لأنظمة نقاط البيع الخاصة بها:
        </Typography>
      </CardContent>
      <CardActions>
        <IoIosArrowRoundForward />
        <Button size="small" sx={{ color:"#543883"}}> اقرأ المزيد</Button>
      </CardActions>
          </Card>
        </div>
    </section>
  )
}

export default Maqalat