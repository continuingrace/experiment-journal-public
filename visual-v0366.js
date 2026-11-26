(()=>{
const root=document.querySelector('main');if(!root)return;
const setup=`<div class="ej-live-board"><header><span>EXPERIMENT 07 · MOTION HARNESS</span><h3>모션 제작 규칙과 영상 결과물</h3><p>작업 기준을 정리한 다음 실제 영상에 적용했습니다.</p></header><div class="ej-live-cols">
<section><small>01 · SETUP</small><h4>모션 하네스 설정</h4><p>Claude Code 스킬과 제작 문서 구성</p><div class="ej-tree">
<div><b>▾ .agents / skills</b><span>hyperframes · media-use · slideshow<br>remotion-to-hyperframes</span></div>
<div><b>▾ .claude</b><span>agents · skills · launch.json</span></div>
<div><b>▾ huddling-motion-start</b><span>docs (design.md · motion.md · video.md)<br>out · references · src · CLAUDE.md</span></div>
</div></section>
<section><small>02 · OUTPUT</small><h4>모션 결과 영상</h4><p>초안 검토와 화면·소리 보정</p><div class="ej-stage"><span>VIDEO OUTPUT</span><strong>약 29초</strong><p>모션 하네스로 완성한 결과물</p><i>▶</i></div><p class="ej-vid-note">아래 플레이어에서 실제 영상을 볼 수 있습니다.</p></section></div></div>`;
const harness=`<div class="ej-live-board"><header><span>EXPERIMENT 06 · HARNESS SYSTEM</span><h3>디자인 제작에서 웹앱 검수까지</h3><p>목적이 다른 두 하네스를 실제 작업에 적용했습니다.</p></header><div class="ej-live-cols">
<section><small>01 · DESIGN HARNESS</small><h4>디자인 제작 하네스</h4><p>기획부터 Figma 시안까지 제작 기준 정리</p><div class="ej-steps"><span>PRD 정리</span><b>↓</b><span>레퍼런스</span><b>↓</b><span>화면 설계</span><b>↓</b><span>Figma 시안</span></div></section>
<section><small>02 · WEBAPP QA</small><h4>웹앱 검수 하네스</h4><p>화면 검사부터 출시까지 검증 절차 정리</p><div class="ej-steps"><span>웹앱 자동 검사</span><b>↓</b><span>배포 확인</span><b>↓</b><span>모바일 승인</span><b>↓</b><span>릴리스 기록</span></div></section></div>
<footer><span>자동 테스트 261개 통과</span><span>오류 사례 10개 차단</span><span>민감정보 검출 0건</span></footer></div>`;
const cycle4=Array.from(document.querySelectorAll('.cycle')).find(s=>s.querySelector('header strong')?.textContent?.includes('[사이클 4]'));
const motion=document.querySelector('#exp-motion-harness');
const harnessArticle=cycle4?.querySelector('.experiment');
const targets=[[harnessArticle,harness],[motion,setup]];
for(const [article,board] of targets){
if(!article)continue;
let cover=article.querySelector('.cover');
if(!cover){cover=document.createElement('div');cover.className='cover';const body=article.querySelector('.card .body');if(body)body.before(cover);}
if(!cover)continue;
cover.innerHTML=board;cover.classList.add('ej-diagram-cover');
}
if(motion){
motion.querySelectorAll('.motion-asset-link').forEach(x=>x.remove());
motion.querySelectorAll('a').forEach(a=>{if(a.href.includes('figma.com/design/RSoltcenpXX4Wn1jn4TwdS'))a.remove();});
const video=motion.querySelector('.motion-output video');
if(video){
video.removeAttribute('src');
video.src='media/mission-to-income-v2_2026-11-08_20-59-11.mp4';
video.controls=true;video.playsInline=true;video.preload='metadata';video.muted=false;
const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 540" width="960" height="540"><rect width="960" height="540" fill="#f5f5f5"/><rect x="245" y="211" rx="15" width="470" height="118" fill="#4056dc"/><text x="480" y="283" fill="white" text-anchor="middle" font-size="40" font-family="Arial,sans-serif" font-weight="bold">제출하기</text></svg>';
video.poster='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
video.addEventListener('loadedmetadata',()=>{
 if(video.paused&&!video.seeking&&video.currentTime<1&&Number.isFinite(video.duration)&&video.duration>8){
   try{video.currentTime=7}catch(e){}
 }
},{once:true});
}
}
})();