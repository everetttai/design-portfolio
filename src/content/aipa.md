# AI Patient Actor
### Giving medical students unlimited reps at the hardest part of becoming a doctor — talking to patients

**Team:** Co-designed with Cinay Dilibal (Design Mentor), alongside dev mentor Carson Bates, developer Alex Almanza, and designer Everett Tai (PM: Angie Martinez) — Dartmouth DALI Lab
**Partner:** Thomas Thesen, Geisel School of Medicine
**My role:** Design, in close collaboration with Cinay across multiple quarters together — research, sketching, wireframes, and shipped UI, with both of us contributing across feature areas rather than splitting ownership by section
**Timeline:** Spring 2025 – June 2026, across multiple DALI Lab quarters (Cinay and I were on the project together throughout)
**Platform:** Web app, deployed at [patient-actor.dartmouth.edu](https://patient-actor.dartmouth.edu/)

---

## 1. The problem

Becoming a good doctor isn't just knowing medicine — it's knowing how to talk to a scared, sick, or grieving person and get the information you need without losing their trust. Medical schools teach this through **standardized-patient programs**: trained actors who play patients so students can practice real encounters before they touch real ones.

It works, but it doesn't scale. Live actors are expensive, scheduling is hard, and a student might get a handful of practice encounters across an entire term — nowhere near enough repetition to build real comfort with something as high-stakes as telling a patient their diagnosis.

Our partner, Thomas Thesen at Geisel School of Medicine, wanted an AI-simulated patient students could talk to anytime — by text or by voice — that would behave like a real patient, then give them structured feedback afterward. Cinay and I joined in Spring 2025, our first quarter on the project together, and the goal that quarter was deliberately narrow — in the team's own words from our project brief at the time:

> "We are a first-term project team, and our primary objective is to deliver a minimally functional product that fulfills the core requirements outlined by our partners... A simulated patient interview available in both text-to-text and speech-to-speech formats. A feedback system that evaluates performance based on established rubrics currently used in the field."

Everything else — avatars, educator tooling, AI-generated reports — came later, across the quarters that followed, once that foundation actually worked.

---

## 2. Understanding who we were designing for

Before sketching anything, we ran four user interviews with med students across different years — Isabella Marchal, Zofia Cieslak, and two others — to understand what made existing practice (or the lack of it) frustrating.

That research converged into three personas, each representing a different point in a med student's training and a different relationship to the product:

- **A 1st-year student**, academically motivated but new to patient interaction, who needs low-stakes reps just to get comfortable thinking on the fly before clinical rotations start.
- **A 3rd-year student on rotations, post-STEP 1**, who needs to apply exam knowledge to real interaction and maintain clinical reasoning under actual time pressure.
- **A 2nd/3rd-year student buried in STEP 2/3 content**, who needs low-stakes differential-diagnosis practice that builds confidence without adding to an already overwhelming load.

We built out one of these in more depth — Mac, a detail-oriented 3rd-year at Geisel — through an empathy map and a journey map of someone actually testing AIPA for the first time. The journey map is where the real insight showed up: it tracked a visible emotional dip mid-session, right at the point where the student got confused about navigating settings and inconsistent feedback on diagnosis effectiveness, before recovering toward satisfaction once they understood the tool. That dip told us the *first* AI patient encounter someone has is fragile — confusing UI in that window doesn't just cost a session, it costs trust in the whole tool.

Mac's persona also surfaced the line that ended up shaping a real design decision later in the term:

> "Showing empathy comes naturally in person, but typing it out over and over can get laborious."

That's a researcher's quote, not a designer's hunch — and it's a big part of why voice and avatar modes weren't a "nice to have" add-on. Text-only practice was measurably missing something that mattered to the people actually using it.

We translated all of this into formal POV statements and "How Might We" questions using DALI's standard format — for example:

> A swamped, burnt-out 2nd or 3rd year medical student with extensive content to study for their STEP 2 or 3 exam **needs to** practice their differential diagnosis skills in a low-stakes environment **in order to** feel confident that they have developed an understanding of potential scenarios for the differential diagnosis portion of their exam.

---

## 3. Turning research into design problems

A few weeks into the term, we sat down specifically to translate raw interview takeaways into problems the team could actually design against — not just "students want better feedback," but a specific articulation of *why* the current feedback failed and what a fix would need to do.

Two problems came out of that session especially clearly.

**Feedback was a wall of text nobody read.** One student told us directly:

> "My first inclination when I see a wall of text like this is to not read it."

The fix wasn't "write shorter feedback" — it was structural: large bold section headers, collapsible sections to cut cognitive load, skimmable bullet-point language, and a "Google Docs"-style comment-and-suggestion model for the transcript itself, so feedback could live in context next to the moment it was about, instead of as one dense summary block at the end.

**Diagnostic testing felt like a vending machine, not a clinical decision.** Another student put it bluntly:

> "Right now you can click 'diagnostic tests' and it gives you everything."

That's a problem for a *training* tool specifically — if ordering every test costs nothing, students never practice the actual skill of deciding what's appropriate. We scoped this as: let students choose specific tests rather than broad categories, give feedback that explains *why* a test choice was or wasn't appropriate, and (longer-term) design cases that simulate real tradeoffs like time constraints and patient comfort.

We also wrote down team priorities at this point, in order: get the existing prototype solid first, then educator/student accounts and class functionality, then emotional voices and personalities, then broader functionality. That ordering mattered later — it's the reason voice/avatar work didn't start until the foundation was actually working for real students.

---

## 4. From sketches to structure

Once we had problems to design against, we ran a Crazy 8s sprint exploring three different shapes for the core encounter flow: a forward flow ("which tests, then feedback"), a reversed flow that front-loaded urgency ("you just killed the patient!" as a framing device to motivate careful diagnosis), and a version built explicitly around the feel of conversing with a bot rather than filling out a form.

That divergence converged into a paper wireframe board — log-in, case selection, two rounds of chat UI, and two rounds of the feedback rubric screen — annotated and walked through together before anything touched Figma. Working at this resolution let us argue about flow logic with a marker instead of a mouse, which is a lot cheaper to throw away.

A separate set of notebook sketches from earlier in the process shows the same ideas in a rawer form — sign-in, a case/rubric setup panel, a chat interface with patient demographics on the side, and a documents/test-ordering panel with options for physical exam, vitals, reflexes, and blood tests. You can see the diagnostic-testing problem from Section 3 already being worked out here, well before it became a written design problem: test types listed individually rather than bundled into one omniscient button.

---

## 5. What shipped

By the end of the term, the core flow worked end-to-end, and several features that started as "later" items had become real.

**Three conversation modes, not one.** Students choose between Text, Speech, and Avatar mode for both how they speak to the patient and how the patient responds to them — a direct response to the empathy-in-text problem from the research. Avatar mode (built on Tavus) gives students a patient who looks at them, speaks, and reacts, which is as close as the tool gets to replicating an actual standardized-patient encounter.

![Choosing between Avatar, Voice, and Chat mode before starting an encounter](aipa/mode_selector)

**Camera as opt-in, not a gate.** Early in the term, camera access was an all-or-nothing requirement before a session could start — fine until you actually watch someone fail a webcam permission check and get stuck. We redesigned this around explicit choice: a "Camera Setup" flow that explains what's recorded and why, what an "acceptable" framing looks like, and a clean fallback path to "Practice Without Camera" or "Start With Camera" — so a broken camera or a student who's not comfortable being recorded never blocks practice.

![The camera setup modal, framed as optional for practice rather than a gate](aipa/camera_optional)

**Feedback redesigned around the actual research problem.** The results screen breaks performance into named skill categories — Empathy & Rapport, Communication Clarity, Patient Advocacy, Active Listening, Professionalism — each with its own score bar, plus separate Strengths and Areas for Improvement panels and a Next Steps & Recommendations block. It's the structural fix the "wall of text" research called for, not just a visual cleanup of the same dense paragraph.

![The feedback breakdown screen, with named skill categories instead of a wall of text](aipa/feedback_breakdown)

**Practice vs. submitted, made explicit.** Not every encounter should count. Students can end a session as a private practice run (visible only to them), submit it as a real, gradable encounter, or discard it entirely without saving — so exploratory test runs don't clutter an educator's view of actual student progress.

**An educator side that's more than a gradebook.** Educators get a Cases library, encounter configuration (including which conversation modes are available per case), and a Reports tab built around an AI assistant that can answer questions like "summarize this week's encounters" using live course data, with one-click quick reports for things like at-risk students and diagnosis accuracy trends.

![The educator Reports tab, with the AI assistant mid-conversation](aipa/reports_tab)

---

## 6. What I'd flag honestly

Two things are worth naming rather than glossing over, in the same spirit as the rest of this writeup:

- **Timestamp precision across recording providers was never fully solved.** Hume and Tavus expose conversation events differently, and the team made a deliberate call to ship "usefully aligned" playback rather than pretend at false precision the underlying APIs didn't support. That's the right call, but it's a real limitation a future team will need to revisit.
- **The educator AI reporting feature leaned more on Anthropic's managed infrastructure than the original plan called for.** It started as a custom MCP-server concept and ended up built on Claude Managed Agents instead — more capable, but also more dependent on a third-party platform than the team initially wanted. Worth knowing if you're evaluating how "custom" the system really is.

---

## 7. Reflection

This project felt different from other work I'd done, mainly because of how AI-forward our actual *process* was — not just the product we were building, but how we built it. We used AI tools throughout design, the same way Carson and the dev team leaned on Claude-generated UI directions for parts of the frontend. That made iteration genuinely faster: we could go from a sketch to a workable screen, react to it, and throw it away again in a fraction of the time a fully manual pass would take.

But it felt strange, too. Designing *with* AI tools while designing a product whose entire premise is an AI standing in for a human patient is a strange kind of recursive experience — you're constantly making judgment calls about where AI assistance helps and where it gets in the way, both in your tools and in the thing you're building. I don't think I fully resolved that tension by the end of the project, and I'm not sure it's the kind of thing that resolves cleanly. What I took from it is that speed isn't the same as confidence — moving faster meant we could test more ideas, but it also meant double-checking more often that what we shipped actually reflected a real decision, not just whatever came out first.

The other thing that stuck with me was designing for two genuinely different audiences inside one product. Students needed a space that felt low-stakes and private enough to be bad at something in front of — that's where the camera opt-in and the practice-vs-submit distinction came from. Educators needed the opposite: visibility, structure, and tools to manage a whole cohort at once, which is why the Reports tab and AI Educator Assistant exist as their own surface entirely. The hard part wasn't designing either side — it was making sure both sides still felt like the same product. Same visual language, same interaction patterns, same sense of what AIPA actually *is*, even though a student opening the app and an educator opening the app are trying to do almost nothing alike.

---

## REMAINING ITEMS FOR EVERETT (delete before publishing)

1. **Final image picks** (reviewed all uploaded screenshots — here's what I'd actually use):
   - **Section 2 (Research):** the empathy map + user journey + Mac persona card (from the research synthesis board)
   - **Section 3 (Research → Design Problems):** the Partner Meeting Week 3 synthesis doc, full page
   - **Section 4 (Sketches):** the Crazy 8s three-flow spread, plus the green paper-wireframe board
   - **Section 5 (Shipped Product):**
     - *Conversation modes* → the "Choose Your Interaction Mode" screen (Avatar/Voice/Chat selector) — clean, no bugs, exactly on-message
     - *Camera opt-in* → the "Camera is Optional for Practice" modal — clean, no bugs, states the design decision almost verbatim
     - *Feedback/results* → the "OnDoc: Son's Death" 87% feedback screen with skill breakdown
     - *Practice vs. submit* → the "Complete Encounter" modal (Save as Practice / Submit as Actual Encounter / Don't Save)
     - *Educator Reports* → the Reports tab screenshot with the AI Educator Assistant mid-conversation and Quick Reports list
   - **Avoid:** the early Courses/Dashboard screenshots showing "Carson Course," "sdf" description text, and a visible **NaN%** bug in the progress ring — these are dev/QA screenshots, not finished product, and would undercut the case study if used as-is. The later, serif-headline versions of the same screens are cleaner if you want a Courses/Dashboard shot at all.
   - **Use with caution, not as a hero:** the "Coughing up blood" transcript screenshot where the AI patient repeatedly responds as if *it's* the doctor — that's a real bug your team caught in testing, not a representative interaction. Fine to include only if explicitly captioned as a QA example; otherwise skip it.
2. **Reflection check** — Section 7 is drafted in first person as if it's your own words. Read it closely and make sure it actually sounds like you, not like me imitating you. Cut/rewrite anything that doesn't.
