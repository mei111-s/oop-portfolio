import { Desktop } from "@/components/os/desktop"
import { WindowBlock } from "@/components/os/window-block"
import { PdfEmbed } from "@/components/os/pdf-embed"
import {
  BookOpen,
  FileCode,
  ListChecks,
  NotebookPen,
  FlaskConical,
  ClipboardCheck,
} from "lucide-react"

export default function MidtermPage() {
  return (
    <Desktop>
      <div className="mb-5 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
        <span className="text-primary">~/portfolio</span>
        <span>/</span>
        <span className="text-accent">midterm</span>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-5">
        {/* Banner */}
        <WindowBlock
          title="midterm.index"
          subtitle="outputs"
          icon={<BookOpen className="h-3 w-3" />}
          status="ready"
          accent="pink"
          glow
          className="col-span-12"
          bodyClassName="p-0"
        >
          <div className="flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent text-glow-pink">
                // comp 009 · oop
              </p>
              <h1 className="mt-3 text-balance font-sans text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Midterm <span className="text-glow-pink text-primary">Outputs</span>
              </h1>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                ｡ﾟﾟ･｡･ﾟﾟ｡                ｡ﾟﾟ･｡･ﾟﾟ｡ 
ﾟ。Documentation of my quizzes,
                seatworks, activities, and exam during Midterm.    ｡ ˚ 
　ﾟ･｡･                           ･ ｡･
              </p>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-widest">
              {[
                { k: "quizzes", v: "02" },
                { k: "seatwork", v: "03" },
                { k: "activities", v: "05" },
                { k: "exam", v: "01" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-md border border-primary/40 bg-primary/10 px-3 py-1.5 text-foreground"
                >
                  <span className="text-muted-foreground">{s.k}:</span>{" "}
                  <span className="text-primary">{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </WindowBlock>

        {/* Quizzes */}
        <WindowBlock
          title="quizzes.dir"
          subtitle="04 files"
          icon={<ListChecks className="h-3 w-3" />}
          accent="violet"
          className="col-span-12 lg:col-span-7"
          bodyClassName="p-4"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <PdfEmbed filename="quiz-01.pdf" src="/pdfs/quiz-01.pdf" pages={2} size="180kb" />
          <p className="text-xs text-muted-foreground leading-relaxed"> For Quiz 1, I think I did well overall, but I also realized that I could have scored higher if I had reviewed more thoroughly and memorized key concepts better. While I was able to answer most of the questions correctly, there were still a few items where deeper preparation would have made a difference. This experience reminded me of the importance of consistent reviewing instead of last-minute studying. In the future, I will try to allocate more time to understanding and memorizing the lessons so I can perform better and avoid simple mistakes. </p>
            <PdfEmbed filename="quiz-02.pdf" src="/pdfs/quiz-02.pdf" pages={2} size="204kb" />
          <p className="text-xs text-muted-foreground leading-relaxed"> For Quiz 2, the quiz was asynchronous, and I also experienced an unstable internet connection while taking it, which made the process a bit more challenging. The quiz focused on loops and switch cases, which are topics I was generally comfortable with. However, I had three mistakes, and I am not entirely sure why I got them wrong since the items I missed were the ones that required typed answers. It’s possible that small typing errors affected my responses. Still found the quiz manageable, but it showed me that I need to be more careful with  input based questions.
 </p>
          </div>
        </WindowBlock>

        {/* Seatwork */}
        <WindowBlock
          title="seatwork.dir"
          subtitle="03 files"
          icon={<ClipboardCheck className="h-3 w-3" />}
          accent="pink"
          className="col-span-12 lg:col-span-5"
          bodyClassName="p-4"
        >
          <div className="grid grid-cols-1 gap-3">
            <PdfEmbed filename="seatwork-01.pdf" src="/pdfs/seatwork-01.pdf" pages={2} size="160kb" height="h-60" />
          <p className="text-xs text-muted-foreground leading-relaxed"> For Seatwork 1, I learned that evaluating expressions with pre-increment and post-increment operators in Java requires close attention to how the values are processed. The seatwork was somewhat exhausting but still fun, since it required careful step-by-step tracking of each variable’s value to ensure accuracy. The pre-increment operator ++a increases the variable’s value before it is used in any expression, so the updated value is applied immediately. Meanwhile, the post-increment operator a++ uses the current value first and only increments it after the expression is evaluated. Although the difference is small, it can greatly affect the final result if not carefully observed.  </p>
            <PdfEmbed filename="seatwork-02.pdf" src="/pdfs/seatwork-02.pdf" pages={2} size="172kb" height="h-60" />
          <p className="text-xs text-muted-foreground leading-relaxed"> This seatwork effectively demonstrates how various control structures work together to create a secure and interactive console application that tracks the total number of successful transactions and illustrates the use of a persistent execution state through a while loop, enabling continuous user interactions until the exit condition is selected. By employing a switch case structure, the program efficiently maps user input to specific banking operations like checking balances, depositing funds, and making withdrawals. The implementation of nested if else logic within the withdrawal function is crucial for maintaining data integrity, as it enforces specific business rules such as a 2,000-unit transaction limit and the prevention of overdrafts.  </p>
            <PdfEmbed filename="seatwork-03.pdf" src="/pdfs/seatwork-03.pdf" pages={2} size="188kb" height="h-60" />
          <p className="text-xs text-muted-foreground leading-relaxed"> In this seatwork, I created a showAgeCategory method and practiced passing integer parameters and using a series of if else statements to sort ages into specific groups like Child, Teenager, Adult, or Senior. This seatwork showed the importance of input validation, as it included a catch all Invalid Age condition to handle data outside of logical bounds. Also the task reinforced my ability to integrate user input through the Scanner class with custom methods to produce a clean, organized report of student details. </p>
          </div>
        </WindowBlock>

        {/* Activities */}
        <WindowBlock
          title="activities.dir"
          subtitle="05 java programs"
          icon={<FlaskConical className="h-3 w-3" />}
          accent="violet"
          className="col-span-12"
          bodyClassName="p-4"
        >
<div className="grid grid-cols-1 gap-3">
  {[
    { file: "activity-01.pdf", desc: "In this activity I learned how Java handles data storage and object referencing. By completing the Variable Identification Table, I clarified the distinction between reference variables stored on the Stack and instance variables located on the Heap. It demonstrated how multiple references, such as s2 and s3, can point to the same object in memory, meaning a change through one reference is reflected in the other." },
    { file: "activity-02.pdf", desc: "This activity was about bitwise, ternary, assignment, and logical operators. It helped me understand how to manipulate data at the binary level using bitwise operators like & and |, and how to use the ternary operator as a concise alternative to traditional if else statements. This helped for mastering the syntax required to perform precise calculations and evaluate complex logical conditions within a program." },
    { file: "activity-03.pdf", desc: "For this activity, I used a while loop for creating a menu that allows for continuous user interaction until a specific exit condition is met. This task also deepened my understanding of data validation, as I had to include logic to check for insufficient balances and transaction limits before updating the wallet's balance." },
    { file: "activity-04.pdf", desc: "By using variables to store specific grades & applying a mathematical formula for the average, I was able to transform raw data into a meaningful performance metric. The core of this task involved implementing an if else ladder to categorize the final average into remarks like Excellent or Good, which effectively showed how software can handle decision-making based on predefined criteria. This activity was helpful for practicing numerical operations and refining the syntax needed to produce formatted, readable output in the Java console." },
    { file: "activity-05.pdf", desc: "This activity highlights the importance of modularity and user-centric design in Java programming. By organizing the code into distinct methods like computeTotal() and checkBudget(), I was able to create a clean, functional structure that efficiently processes user input to provide a real-time financial summary. Implementing various conditions to handle whether a budget is exceeded or exactly met helped me better understand how conditional logic dictates program flow, while the personalized output messages made the application feel practical and engaging. Overall, building this Personal Expense Tracker served as a valuable exercise in applying Object-Oriented principles to solve a common real-world problem" },
  ].map((a) => (
    <div key={a.file}>
      <PdfEmbed filename={a.file} src={`/pdfs/${a.file}`} pages={2} size="210kb" height="h-60"
      />

      <p className="text-xs text-muted-foreground leading-relaxed">
        {a.desc}
      </p>
    </div>
  ))}
</div>
        </WindowBlock>

        {/* Exam */}
        <WindowBlock
          title="exam.pdf"
          subtitle="midterm exam"
          icon={<FileCode className="h-3 w-3" />}
          status="submitted"
          accent="pink"
          className="col-span-12 lg:col-span-7"
          bodyClassName="p-4"
        >
          <PdfEmbed filename="midterm-exam.pdf" pages={4} size="412kb" height="h-[420px]" />
        </WindowBlock>

        {/* Reflection */}
        <WindowBlock
          title="reflection.md"
          subtitle="personal log"
          icon={<NotebookPen className="h-3 w-3" />}
          accent="violet"
          className="col-span-12 lg:col-span-5"
        >
          <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              ▸ takeaway
            </p>
            <p>
              The OOP midterm exam was generally manageable and straightforward. The true or false section was easy to answer, and the multiple-choice part was not too difficult since I was able to review the materials posted on Canvas beforehand. The review materials were helpful in recalling key concepts and identifying correct answers with confidence.
            </p>
            <p className="text-muted-foreground">
              The last part, which involved fill-in-the-blank programming items, was also easy to follow. It mainly focused on functions and the proper opening and closing of the Scanner, which were concepts covered during discussions and practice activities. The exam felt fair and aligned with the topics that were discussed and reviewed in class.
            </p>
            <div className="rounded-md border-l-2 border-primary bg-primary/5 px-3 py-2 font-mono text-xs text-foreground/90">
              {'⋆࿔♡ ₊⊹⋆˚✿˖°⊹₊♡࿔⋆'}
            </div>
          </div>
        </WindowBlock>
      </div>
    </Desktop>
  )
}
