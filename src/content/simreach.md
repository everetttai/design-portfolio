# SimReach
### Designing decision support for hospital staffing decisions that move patients closer to care

**Team:** Co-designed with Faith Niyi-Awolesi — Dartmouth DALI Lab, in partnership with the Moen Lab
**My role:** Design, alongside Faith, across the full project
**Timeline:** September 2025 – January 2026
**Tools:** Figma
**Live app:** [simreach-fullstack.fly.dev](https://simreach-fullstack.fly.dev/)

---

## 1. The problem

Hospitals that run "hub-and-spoke" cancer care networks — one large hospital plus several smaller satellite clinics — face a constant, high-stakes question: how many oncologists should we send to each satellite, and how often?

Today, that decision is mostly guesswork. Administrators use simple supply-and-demand ratios, daily huddle documents, and tools like QGenda that track where physicians are, but nothing that models where they should be. Get it wrong, and patients in rural areas drive hours for care that could be closer to home — or a satellite clinic sits under-booked while the hub is overwhelmed.

SimReach is a decision-support tool built on top of a real simulation framework developed in Dartmouth's Moen Lab, which models thousands of counterfactual scenarios to estimate how much patient travel time a hospital could save by reallocating a percentage of oncologist visits from a hub to a satellite clinic — and at what point that reallocation stops helping and starts hurting.

Our job as designers was to take a working statistical model — bootstrapped simulations, confidence intervals, grid-search optimization — and turn it into something a hospital director with no statistics background could use to make a real staffing decision with confidence.

---

## 2. Research: who actually makes this decision, and what do they need?

We ran stakeholder interviews and synthesized three personas representing the different altitudes at which this decision gets made:

**Colin** — Senior Director of Oncology Services. Owns the day-to-day operational reality: missed appointments, no-show rates, space utilization. He needs to know, concretely, "how many slots am I going to lose if I move this physician?"

**Dr. Thomas** — Chair of Radiation Oncology. Thinks in clinical and quality terms: machine utilization, throughput, standardization of care across sites. His framing was the most demanding — he wanted to know that patients get the same standard of care wherever they're seen ("food should taste the same in New Hampshire as it does in California," as one note put it), not just that travel time goes down.

**Deborah** — System VP, Oncology. The executive audience: she needs evidence strong enough to defend a staffing change to leadership, not just a recommendation to trust.

These three pulled in different directions — Colin wanted operational specifics, Dr. Thomas wanted clinical legitimacy, Deborah wanted boardroom-ready evidence — and a single results screen had to satisfy all three without becoming a kitchen sink.

From this research we wrote five needs statements that became our north star for the information architecture:

1. *Busy executive healthcare leaders need a system-wide hub that unifies provider allocation, site capacity, and patient demand forecasts in order to quickly identify where intervention is needed most.* → became the **Data Hub**
2. *Administrative personnel need a way to visualize transportation burdens and commute times so that staff assignments consider both efficiency and provider well-being.* → became **net travel time savings**, which subtracts physician commute burden from raw patient savings
3. *Hospital directors need a way to visualize existing patient, provider, and travel data to help with staffing decision making.* → became the **Scenario Overview**
4. *Hospital directors need a way to simulate changes in staffing and patient allocation to see how these choices affect patient travel times and clinic workloads.* → became **Run a New Scenario**, with θ (the percentage of visits reallocated) as the core dial
5. *Hospital leadership teams need a way to compare potential future scenarios to recent months' data to evaluate whether proposed changes lead to measurable improvements.* → became **Compare** in Scenario Results

One recurring theme cut across all three personas and shaped a key design principle: nobody wanted raw output. Several research notes called explicitly for "decision-support recommendations, not just raw data" and "tools that present actionable recommendations." That insight is the reason Scenario Results ends in a plain-language "Decision Support Takeaways" section instead of stopping at the chart.

---

## 3. Translating a statistical model into an interface

The underlying simulation, built on a research framework from the Moen Lab, runs thousands of bootstrapped iterations per scenario, outputs results with 95% confidence intervals, and finds an optimal reallocation percentage via grid search — the point where patient travel savings are maximized before they start declining or reversing.

That's a hard thing to show simply. Our early iterations showed the raw optimization curve — travel-time savings plotted against θ — as the primary view. It was honest, but it asked the user to interpret a graph before getting an answer. Hospital directors aren't data scientists; they came to SimReach with a question ("how many physicians do we need at our spoke clinic?"), not a curiosity about confidence bands.

We restructured Scenario Results around a headline-first hierarchy:

- **Top of page:** the answer (optimal % reallocation, patient travel reduction, patients impacted) as four scannable metric cards
- **Middle:** the curve, for anyone who wants to verify or explore — with the optimal point marked, not just plotted
- **Bottom:** plain-language takeaways and recommended next steps, each of which can be pushed to a Notebook to-do item with one click

This ordering means a time-pressed executive gets the answer in the first five seconds, while a more analytical user (or someone who needs to defend the number later) can descend into the supporting data without ever being forced to.

---

## 4. Designing for messy, real-world data — the Data Hub

Of everything in SimReach, the Data Hub setup flow carried the most inherent complexity, simply because of how much real-world data has to pass through it before a single simulation can run. Hospital systems don't hand over clean, uniform data — they hand over whatever their IT or analytics team happens to have, in whatever shape it happens to be in. The flow needed to hold up against:

- **Partial uploads.** A CSV might arrive with 8 of the 10 required columns. Rather than reject the file outright, the review screen auto-expands locations with missing or unmatched columns and collapses ones that validated cleanly — so a director uploading data for 8 sites isn't forced to scroll past 6 "all good" cards to find the 2 that actually need their attention.
- **Flexible file structure.** One CSV could cover every site, or a hospital could upload one file per location — we couldn't assume which, so the "assign file to location" step lets either pattern work without forcing a specific format on the user upfront.
- **Delegation.** A director who owns the *decision* to run a scenario is rarely the person who owns the *data*. We built an assign-to-collaborator flow — search-or-invite by email, pending-request tracking, reminder emails — so the setup burden could be handed to whoever actually has the file, without losing visibility into who still owes what.

This was also the flow where I felt the limits of my own context most acutely. Early on, I was designing individual upload screens without full visibility into how messy the underlying hospital data actually was, or why certain validation rules existed — which sometimes meant solving the screen in front of me without fully understanding the constraint behind it. That gap closed over the course of the project as I got closer to the research and to our partner conversations, but it's a real part of how this flow came together, and worth naming honestly rather than implying a tidier process than what happened.

---

## 5. Known limitations (and why I'm naming them)

Two things in the shipped product are explicitly not finished, and I think that's worth saying outright rather than hiding:

- **Generic recommendations.** Today, "Decision Support Takeaways" surfaces the same four recommendation types for every scenario (validate capacity, develop a reallocation strategy, build a timeline, monitor post-launch) — the location names swap in, but the substance doesn't yet adapt to what the simulation actually found. The next iteration should generate takeaways unique to each scenario's results.
- **Quantitative data quality scores.** The Data Hub's "94% data quality" score is a placeholder. A more honest version would use qualitative tiers grounded in concrete rules (time since last update, whether an annual site review has occurred) rather than implying false precision.

I'd rather show that I can recognize the gap between shipped and finished than pretend the v1 is the final word.

---

## 6. Reflection

This was my first project at DALI, and a lot of what I took from it had nothing to do with pixels. I learned how a hospital system actually operates day to day — huddle documents, QGenda scheduling, the gap between how administrators talk about "supply and demand" and what that means for an individual patient's drive time — and I learned what it actually takes to design for large, sporadic, inconsistently-formatted datasets rather than a clean Figma-friendly dataset I'd invented myself. I also got my first real experience working inside a cross-functional team with a PM, full-stack engineers, and other designers, instead of running a solo class project end to end.

If I could change one thing, I'd ask for more scope and context earlier. In the first term especially, I was sometimes handed a flow to design without a clear enough picture of the research behind it or the data constraints driving it — which meant I was occasionally solving the screen in front of me without fully understanding why it mattered. That's a normal growing pain on a first lab project, but it's also the clearest lesson I'm carrying forward: ask for the why up front, even when it feels like it might slow things down, because designing without it costs more time later.

---

## REMAINING ITEMS FOR EVERETT (delete before publishing)

1. **Reconstruction notice** — this file was rebuilt from text recovered via conversation search after the original draft file was lost between sessions. I'm confident in its accuracy since it's pulled from verbatim recovered text rather than reconstructed from memory, but it's worth a careful read-through to confirm nothing drifted.
2. **Name check** — the recovered text says "Faith Niyi-Awolesi," correcting an earlier shorter reference to just "Faith Awolesi." Worth confirming this is her actual correct name before publishing, since it came from a chat transcript rather than directly from her.
3. **Testing evidence** — the original draft noted you weren't sure if you had firm quotable usability-testing notes beyond the interview synthesis (mostly des crit feedback and partner-meeting impressions). If you've since found actual notes or quotes, send them and I can fold in a short "what we heard in partner reviews" beat.
4. **Visual selection** — needs final picks once the narrative is confirmed: likely candidates are the onboarding intro, the Data Hub setup with the partial-upload state, the Run a New Scenario flow with the θ dial, and the Scenario Results headline-first layout.
