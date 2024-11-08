"use client";
import Fromtocard from "@/components/common/Fromtocard";
import Searchbadge from "@/components/common/Searchbadge";
import Mailbody from "./Mailbody";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Reply, Send } from "lucide-react";
import Mailinput from "./Mailinput";

const Mailcontent = () => {
  const [replyVisible, setReplyVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleReply = () => {
    setReplyVisible((prev) => !prev);
    setIsVisible(!isVisible);
  };

  const handleExitComplete = () => setIsVisible(false);

  return (
    <div className="bg-white h-screen p-3 relative">
      <div className="flex justify-between h-[3%]">
        <div className="flex gap-1">
          <Searchbadge
            name="important"
            color="#FF0000"
            emoji="🔥"
            count="20"
            option="mail"
          />
          <Searchbadge
            name="work"
            color="#A020F0"
            emoji="🧳"
            count="20"
            option="mail"
          />
        </div>
        <div className="font-semibold text-sm text-darkgrey2">
          Today, 16 July 2021, 11:45
        </div>
      </div>

      <div className="text-xl font-bold text-darkgrey2 p-3 mt-2 h-[5%]">
        Re: Internship interested in your company
      </div>

      <Fromtocard />
      <div className="h-[80%] ">
        <Mailbody
          htmlContent={`<div id="m_6638210915932899506column-0-0" class="m_6638210915932899506hse-column m_6638210915932899506hse-size-12">
  <div id="m_6638210915932899506hs_cos_wrapper_module-0-0-0" style="color:inherit;font-size:inherit;line-height:inherit"><div style="margin:0;padding:0;background-color:#ffffff;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0;padding:20px 0;background-color:#ffffff">
        <tbody><tr>
            <td align="center" style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word">
                
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="margin:0 auto;background-color:#ffffff">
                    
                    <tbody><tr>
                        <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;padding-right:20px;border:1px solid #e2e2e2">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
                                <tbody><tr>
                                    <td width="80" style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;padding-right:30px">
                                        <div style="width:80px;height:80px;border-right:1px solid #e2e2e2;background:#000000">
                                            <img src="https://ci3.googleusercontent.com/meips/ADKq_Na3n2VCWtnI4uos5cyjoJB8HmmP30xMFENNccYO_GcYbDkFdx0BaHwXb4Avw7JTiYJhpB2dQ8Qdig5LeXjZpRnoQ0jT1oF3k3Wp1GQhC5WLanrUb2yqmi17xoMBrlNKBR04hlWq=s0-d-e1-ft#https://hs-21532664.f.hubspotemail.net/hubfs/21532664/render-logomark-blkbg.png" alt="Render Logo" style="outline:none;text-decoration:none;width:80px;height:80px" width="80" height="80" class="CToWUd" data-bit="iit">
                                        </div>
                                    </td>
                                    <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word">
                                        <h1 style="color:#000000;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:28px;font-weight:300;margin:0;line-height:1.0">
                                            Render Recap</h1>
                                    </td>
                                    <td align="right" style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word">
                                        <span style="font-family:'Courier New',monospace;font-size:10px;color:#858585;text-transform:uppercase;line-height:0.8">November
                                            2024</span>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;padding:40px 20px;border:1px solid #e2e2e2">
                            <p style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.4;color:#272727;margin:0">
                                This month, databases take center stage: we're featuring flexible storage, in-place
                                upgrades, a migration story featuring a <em style="font-style:italic">massive</em>
                                customer DB, and an open role at Render to help folks get the most out of their
                                datastores.</p>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;padding:40px 20px;border:1px solid #e2e2e2">
                            <h2 style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:28px;font-weight:300;color:#000000;line-height:1.4;margin:0 0 20px 0">
                                Spotlight: PostgreSQL</h2>
                            
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody><tr>
                                    <td width="100" style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;padding-right:24px;vertical-align:top">
                                        <div style="width:100px;height:100px">
                                            <img src="https://ci3.googleusercontent.com/meips/ADKq_NbCFnPxAK_cIkw4op6AADtVjYyDQskRI-jfwyWKi2t0vz0Xvcl4saiKp2tK-9Op6HQ7AtM_X1zUueBWG9PMbjsm8nahbsiiYTWtchFL8_EwEiVdjYj2BYhnDA=s0-d-e1-ft#https://hs-21532664.f.hubspotemail.net/hubfs/21532664/PostgreSQL.png" alt="PostgreSQL Logo" style="outline:none;text-decoration:none;width:100px;height:100px" width="100" height="100" class="CToWUd" data-bit="iit">
                                        </div>
                                    </td>
                                    <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;vertical-align:top">
                                        <div style="display:inline-block;padding:8px 12px;font-family:'Courier New',monospace;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:0.2px;background-color:#c5ebff;color:#002c6f">
                                            Featured</div>
                                        <h3 style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:500;color:#000000;text-decoration:underline;line-height:1.4;margin:10px 0">
                                            <a style="color:#000000" href="https://d2xMk204.na1.hubspotlinks.com/Ctc/GG+113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7R3m2ndW7lCdLW6lZ3pZMMl-VgGPxk-W3xsXxg2bTxvmW4xZVSz8YLhGxW7X5dJr88tWgsW43sWwF1bQl2YW6FnNXD8M6bD8VGk2xM7hDJ_pW5GN8zb19vjpPW53b0HM631c5xW46Vq9k6kzqPyW75cThy8NhwPqW9lvVCm5C0wHDVYBqV874G_NnN2wqLVBHL_47W1YQZ8419lgjrW71JrHK3K1prfW4kl_g54NNwkvVPVv2Z1B7PRPW3-vS_36phqzFVycXrC2jP99jN4kln29BCqlkW63x0cj5XxQ33W7XJGxp6bsRqKW81cM5L4GLmNvf3G-9R404" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://d2xMk204.na1.hubspotlinks.com/Ctc/GG%2B113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7R3m2ndW7lCdLW6lZ3pZMMl-VgGPxk-W3xsXxg2bTxvmW4xZVSz8YLhGxW7X5dJr88tWgsW43sWwF1bQl2YW6FnNXD8M6bD8VGk2xM7hDJ_pW5GN8zb19vjpPW53b0HM631c5xW46Vq9k6kzqPyW75cThy8NhwPqW9lvVCm5C0wHDVYBqV874G_NnN2wqLVBHL_47W1YQZ8419lgjrW71JrHK3K1prfW4kl_g54NNwkvVPVv2Z1B7PRPW3-vS_36phqzFVycXrC2jP99jN4kln29BCqlkW63x0cj5XxQ33W7XJGxp6bsRqKW81cM5L4GLmNvf3G-9R404&amp;source=gmail&amp;ust=1731167611684000&amp;usg=AOvVaw3H97Z8yep3orJEVokvsEB-">Customize your storage</a></h3>
                                        <p style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.4;color:#272727;margin:0">
                                            You can now set your database's storage separately from RAM and CPU, then increase it on
                                            demand without downtime. Pay for exactly the specs you need with a flexible
                                            plan.</p>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:30px">
                                <tbody><tr>
                                    <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word">
                                        <div style="display:inline-block;padding:8px 12px;font-family:'Courier New',monospace;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:0.2px;background-color:#c5ebff;color:#002c6f">
                                            New Release</div>
                                        <h3 style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:500;color:#000000;text-decoration:underline;line-height:1.4;margin:10px 0">
                                            <a style="color:#000000" href="https://d2xMk204.na1.hubspotlinks.com/Ctc/GG+113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-8q3m2ndW8wLKSR6lZ3lQW45wbd985J50VW6tXrTP1fDtRXN3PlTfDXh3YcV-KTHJ7cf96XW1DNyHT9cZQJVW2mQL948dZ7YKW5zdCpc7CsZLpW1rbnl78Fm2xLW2Wqvp91GYGf_W2cpZGn9lYdmwW5MXcl91LFQ2tW6rTYtw80PPXfW4D_wSs5nvL8VW8t-ymN3wFCD7W6HQCwJ7BG0B0VPpqSg91y245W1nQM577jsBzRW841Xt_7x2dvsV3PKYb71srZ5W5vKg1y5f0ZdLW6PN-H27GBJNMW28_GHN7h9tqvW6JcmD485f3y8W5J7VxC9hCnsJW6Jj5xR1DmsJdW7fPLSx65kdd2VZmw356HpjfsN6SM7j_FhbGRf5NhVH-04" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://d2xMk204.na1.hubspotlinks.com/Ctc/GG%2B113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-8q3m2ndW8wLKSR6lZ3lQW45wbd985J50VW6tXrTP1fDtRXN3PlTfDXh3YcV-KTHJ7cf96XW1DNyHT9cZQJVW2mQL948dZ7YKW5zdCpc7CsZLpW1rbnl78Fm2xLW2Wqvp91GYGf_W2cpZGn9lYdmwW5MXcl91LFQ2tW6rTYtw80PPXfW4D_wSs5nvL8VW8t-ymN3wFCD7W6HQCwJ7BG0B0VPpqSg91y245W1nQM577jsBzRW841Xt_7x2dvsV3PKYb71srZ5W5vKg1y5f0ZdLW6PN-H27GBJNMW28_GHN7h9tqvW6JcmD485f3y8W5J7VxC9hCnsJW6Jj5xR1DmsJdW7fPLSx65kdd2VZmw356HpjfsN6SM7j_FhbGRf5NhVH-04&amp;source=gmail&amp;ust=1731167611684000&amp;usg=AOvVaw0LZzDRaTiFXLH8fLu9swsB">Upgrade your database in-place</a></h3>
                                        <p style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.4;color:#272727;margin:0">
                                            New this week: move your database to PostgreSQL 16 in a couple of
                                            clicks. It's perfect timing if you're on version 12, which is nearing <span style="text-decoration:underline"><a style="color:#000000" href="https://d2xMk204.na1.hubspotlinks.com/Ctc/GG+113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7R3m2ndW7lCdLW6lZ3lpW61TzvY8VMYxwW55g9Fn5gNmNvN2DTL2FyyTLLW7hxpdk4RVN8HW8tVPxw3tcsB4W7BcL_-4Cf5BrW18Lywk1W4CbVW7Jh3Q06nCcj4W2WCNWt4WtkwhN7z2wf1rtgKbW8fDrW19j0Z_PW41fwcm3MnPkHW9dRJj14bp06_W6swXxm1YZGc-W7SCgmq2md-GZW8k1j0y32gYS7W6rnnCn1KdLchW16KH211f7tBzW2_NXd91Z87KjW1mNN401ljjr9W7HLb4m4yKFynW40C5cB8b3hDhV9KSn27nzyWYW5dFF8M4tsfL9f4Kc3rl04" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://d2xMk204.na1.hubspotlinks.com/Ctc/GG%2B113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7R3m2ndW7lCdLW6lZ3lpW61TzvY8VMYxwW55g9Fn5gNmNvN2DTL2FyyTLLW7hxpdk4RVN8HW8tVPxw3tcsB4W7BcL_-4Cf5BrW18Lywk1W4CbVW7Jh3Q06nCcj4W2WCNWt4WtkwhN7z2wf1rtgKbW8fDrW19j0Z_PW41fwcm3MnPkHW9dRJj14bp06_W6swXxm1YZGc-W7SCgmq2md-GZW8k1j0y32gYS7W6rnnCn1KdLchW16KH211f7tBzW2_NXd91Z87KjW1mNN401ljjr9W7HLb4m4yKFynW40C5cB8b3hDhV9KSn27nzyWYW5dFF8M4tsfL9f4Kc3rl04&amp;source=gmail&amp;ust=1731167611684000&amp;usg=AOvVaw2tw4JOo5Pm--TfZJnXbhCp">end-of-life</a></span>.</p>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:30px">
                                <tbody><tr>
                                    <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word">
                                        <div style="display:inline-block;padding:8px 12px;font-family:'Courier New',monospace;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:0.2px;background-color:#c5ebff;color:#002c6f">
                                            Pro tip</div>
                                        <h3 style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:500;color:#000000;text-decoration:underline;line-height:1.4;margin:10px 0">
                                            <a style="color:#000000" href="https://d2xMk204.na1.hubspotlinks.com/Ctc/GG+113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-8q3m2ndW8wLKSR6lZ3pxW2ZVWdb2N0mJVN2QLjLF8d340W799PxW6LwG1yW3__j0P6R-GFkW2yzYc925224BW1KsL1q33ZncbW4hWcwZ6RbRHVW3Npnjb9l_MJJW4RcdMS2D11VbW1fjlBw5xm-MPW2lBY_p1VqS1DW9dh2Y93Tchc4N4wqP3jyzCfsW4-BYhZ5lH5JbW6RVSP-7y4FktW47MV368lQh8pN8Jhy5cGK3FBW8sNrtJ4B8tSwW55bgJX6HVhYmW3KTSyC4CwT6_W4FnfM049nKmQW5rmVBt51zbX-W3z46Wf1SZ57XW7NtSdC4hZv6fW6z9D0w7R2TX1W41S0Vr5F8b9JW3JFLx01j9cdsW8fS_np8dS1JRf66q2Ms04" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://d2xMk204.na1.hubspotlinks.com/Ctc/GG%2B113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-8q3m2ndW8wLKSR6lZ3pxW2ZVWdb2N0mJVN2QLjLF8d340W799PxW6LwG1yW3__j0P6R-GFkW2yzYc925224BW1KsL1q33ZncbW4hWcwZ6RbRHVW3Npnjb9l_MJJW4RcdMS2D11VbW1fjlBw5xm-MPW2lBY_p1VqS1DW9dh2Y93Tchc4N4wqP3jyzCfsW4-BYhZ5lH5JbW6RVSP-7y4FktW47MV368lQh8pN8Jhy5cGK3FBW8sNrtJ4B8tSwW55bgJX6HVhYmW3KTSyC4CwT6_W4FnfM049nKmQW5rmVBt51zbX-W3z46Wf1SZ57XW7NtSdC4hZv6fW6z9D0w7R2TX1W41S0Vr5F8b9JW3JFLx01j9cdsW8fS_np8dS1JRf66q2Ms04&amp;source=gmail&amp;ust=1731167611684000&amp;usg=AOvVaw0_cOJoi9q9Lg7vJW9It-WE">Diagnose slow-running queries</a></h3>
                                        <p style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.4;color:#272727;margin:0">
                                            Queries taking longer than they should? Use the <span style="font-family:'Courier New',Courier,monospace;background-color:#e2e2e2;font-size:15px;margin-top:10px;padding:2px">EXPLAIN ANALYZE</span>
                                            command to profile your database's query plans and identify performance bottlenecks.
                                        </p>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;padding:40px 20px;border:1px solid #e2e2e2">
                            <h2 style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:28px;font-weight:300;color:#000000;line-height:1.4;margin:0 0 20px 0">
                                Customer Corner</h2>
                            
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody><tr>
                                    <td width="100" style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;padding-right:24px;vertical-align:top">
                                        <div style="width:100px;height:100px">
                                            <img src="https://ci3.googleusercontent.com/meips/ADKq_NYOsTqUCNp5UI0jtWB7fTJBdOtI7tqkI5HjiazHy2iBT5lErcT4F28zLcSTwji3jIqxBiotE7LyEtHj49Fnj4_uqnTEXTu4Cb2ovXPNPEf_nzWWsqzWuFdw4Q=s0-d-e1-ft#https://hs-21532664.f.hubspotemail.net/hubfs/21532664/Reservamos.png" alt="Reservamos Logo" style="outline:none;text-decoration:none;width:100px;height:100px" width="100" height="100" class="CToWUd" data-bit="iit">
                                            </div>
                                    </td>
                                    <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;vertical-align:top">
                                        <div style="display:inline-block;padding:8px 12px;font-family:'Courier New',monospace;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:0.2px;background-color:#acffd1;color:#003924">
                                            Migration Story</div>
                                        <h3 style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:500;color:#000000;text-decoration:underline;line-height:1.4;margin:10px 0">
                                            <a style="color:#000000" href="https://d2xMk204.na1.hubspotlinks.com/Ctc/GG+113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7R3m2ndW7lCdLW6lZ3q7VGMmKD4brc3bW3KC0pM8dFMc5W5FcMvm1K4q42W5qffwQ8Zw3gbW8vnZlz8Bxt6GW52y_MD2XjkscW3-g01T73D0xGW5Mr6_l8DZ78TW1Mll7Y47yv82W7SfpMW7plVzpW5777Tp5H3fzsW8VfWnp4XLN9GW5Hlk_68sJ3CzW5tVWBr8p0y3NW7m8w5m5HJMT1W8QpH_F6q8xdVW1ffv5Y9jZG_cW5ZpRPy49N9RgW2W6NLW2Vj9hXW5p_jL68B89WNDr0B15P8HTV9RW-M7gLr1LW7hm6yb4d_m33N1YGt9H5Z1TPf79wzjW04" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://d2xMk204.na1.hubspotlinks.com/Ctc/GG%2B113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7R3m2ndW7lCdLW6lZ3q7VGMmKD4brc3bW3KC0pM8dFMc5W5FcMvm1K4q42W5qffwQ8Zw3gbW8vnZlz8Bxt6GW52y_MD2XjkscW3-g01T73D0xGW5Mr6_l8DZ78TW1Mll7Y47yv82W7SfpMW7plVzpW5777Tp5H3fzsW8VfWnp4XLN9GW5Hlk_68sJ3CzW5tVWBr8p0y3NW7m8w5m5HJMT1W8QpH_F6q8xdVW1ffv5Y9jZG_cW5ZpRPy49N9RgW2W6NLW2Vj9hXW5p_jL68B89WNDr0B15P8HTV9RW-M7gLr1LW7hm6yb4d_m33N1YGt9H5Z1TPf79wzjW04&amp;source=gmail&amp;ust=1731167611684000&amp;usg=AOvVaw1Hudc5ybPRkOXXuXm_J5UB">Reservamos powers bus travel across Latin America — now on Render</a></h3>
                                        <p style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.4;color:#272727;margin:0">
                                            The Reservamos team recently moved their infra to Render from Heroku and AWS
                                            for improved DX and security. Their largest database (1.2 TB) required just
                                            ten minutes to migrate, which their CTO Elías said was "like magic."</p>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:30px">
                                <tbody><tr>
                                    <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word">
                                        <div style="display:inline-block;padding:8px 12px;font-family:'Courier New',monospace;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:0.2px;background-color:#acffd1;color:#003924">
                                            Community highlight</div>
                                        <h3 style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:500;color:#000000;text-decoration:underline;line-height:1.4;margin:10px 0">
                                            <a style="color:#000000" href="https://d2xMk204.na1.hubspotlinks.com/Ctc/GG+113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7x3m2ndW6N1vHY6lZ3pvW8Dw0gR7k_LpwN2l-B_KFLlXDW8B7r4w4cTXC-W2KQTZS1QbsVGW1MJ7jK8TC-trVr21D-15ybyHW3THDPx1Nsp5ZW275-Ym8gvRLjW9b5ZGq2RRXn3W64_5498F_Vj1Vh0Lgm7m4YwZVPNLtS7YFML_W3Fsjc7749_p9N6l5y_YVg7XVW6ghPqn6k0B0YW1Hb-PS4YplrvW8TFz5n54JzRrVxkcv28QY3ctVgFDVH77FFNVW7HLcRL874wdTW7GP91v5s3KlJW1dfHcj4hK_yGf1N8l6404" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://d2xMk204.na1.hubspotlinks.com/Ctc/GG%2B113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7x3m2ndW6N1vHY6lZ3pvW8Dw0gR7k_LpwN2l-B_KFLlXDW8B7r4w4cTXC-W2KQTZS1QbsVGW1MJ7jK8TC-trVr21D-15ybyHW3THDPx1Nsp5ZW275-Ym8gvRLjW9b5ZGq2RRXn3W64_5498F_Vj1Vh0Lgm7m4YwZVPNLtS7YFML_W3Fsjc7749_p9N6l5y_YVg7XVW6ghPqn6k0B0YW1Hb-PS4YplrvW8TFz5n54JzRrVxkcv28QY3ctVgFDVH77FFNVW7HLcRL874wdTW7GP91v5s3KlJW1dfHcj4hK_yGf1N8l6404&amp;source=gmail&amp;ust=1731167611684000&amp;usg=AOvVaw0netre4rV-mLIWBXL35qp6">Voice-enabled interview prep with OpenAI and Render</a></h3>
                                        <p style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.4;color:#272727;margin:0">
                                            College applications platform Admit AI recently added speech-to-speech
                                            interview preparation backed by OpenAI's Realtime API. Their founder Kenn
                                            Ejima noted that Render "really shines" at handling long-running
                                            WebSocket connections required for real-time conversation.</p>
                                        <img src="https://ci3.googleusercontent.com/meips/ADKq_NamfmlQrFUI9a1ryrLWtiQQ6VSGeCbRZroL3Aangl2UPIaOWQd11F-MFKzXdOVxcFyEa5eIZ__1UjvBhKqkYKjWtgWUMCPVAhkJTJ7KGCgGA0LscYEAtodEyw=s0-d-e1-ft#https://hs-21532664.f.hubspotemail.net/hubfs/21532664/kenn-ejima.png" alt="AI Interview prep demo" style="outline:none;text-decoration:none;max-width:100%;height:auto;border:1px solid #e2e2e2;margin:20px 0" height="auto" class="CToWUd a6T" data-bit="iit" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 845px; top: 1760.84px;"><span data-is-tooltip-wrapper="true" class="a5q" jsaction="JIbuQc:.CLIENT"><button class="VYBDae-JX-I VYBDae-JX-I-ql-ay5-ays CgzRE" jscontroller="PIVayb" jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox;focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;" data-idom-class="CgzRE" data-use-native-focus-logic="true" jsname="hRZeKc" aria-label="Download attachment " data-tooltip-enabled="true" data-tooltip-id="tt-c22" data-tooltip-classes="AZPksf" id="" jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTgxNTA3MzgxNTExNzc2MzMwMyJd; 43:WyJpbWFnZS9qcGVnIl0."><span class="OiePBf-zPjgPe VYBDae-JX-UHGRz"></span><span class="bHC-Q" jscontroller="LBaJxb" jsname="m9ZlFb" soy-skip="" ssk="6:RWVI5c"></span><span class="VYBDae-JX-ank-Rtc0Jf" jsname="S5tZuc" aria-hidden="true"><span class="bzc-ank" aria-hidden="true"><svg viewBox="0 -960 960 960" height="20" width="20" focusable="false" class=" aoH"><path d="M480-336L288-528l51-51L444-474V-816h72v342L621-579l51,51L480-336ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72H696v-72h72v72q0,29.7-21.16,50.85T695.96-192H263.72Z"></path></svg></span></span><div class="VYBDae-JX-ano"></div></button><div class="ne2Ple-oshW8e-J9" id="tt-c22" role="tooltip" aria-hidden="true">Download</div></span></div>
                                        <p style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;text-decoration:underline;text-align:center;margin:0">
                                            <a style="color:#000000" href="https://d2xMk204.na1.hubspotlinks.com/Ctc/GG+113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7R3m2ndW7lCdLW6lZ3mlW91kxJP7zHNDbW3_xD_S8xwD44W3JVPZp2g2548VTWfn83WpXLvW2mtJzJ44qm-RV9393d8n9TKrW5JQmts15Hr6rW7MrMVP8X_q_tVBBG-D8F94c-W2wRl1j6sk_cmW63jJq78JF8kFN24Br-x89ckVW4cqb2j6-1lBGW4HHjgy4p6-hgW4S9m0t8Z0NTsW4x35PL71wrgpW6F0k_V7_xqbxV7ssws2vj6l2W24gTKP4Vn1hJW6nQ4R07CCQzcW3VqdpR5ddj7qW8Wlc6B3Wp4f7W3plH1L1nM0C8V2V_vh93z03Jf1hlKss04" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://d2xMk204.na1.hubspotlinks.com/Ctc/GG%2B113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7R3m2ndW7lCdLW6lZ3mlW91kxJP7zHNDbW3_xD_S8xwD44W3JVPZp2g2548VTWfn83WpXLvW2mtJzJ44qm-RV9393d8n9TKrW5JQmts15Hr6rW7MrMVP8X_q_tVBBG-D8F94c-W2wRl1j6sk_cmW63jJq78JF8kFN24Br-x89ckVW4cqb2j6-1lBGW4HHjgy4p6-hgW4S9m0t8Z0NTsW4x35PL71wrgpW6F0k_V7_xqbxV7ssws2vj6l2W24gTKP4Vn1hJW6nQ4R07CCQzcW3VqdpR5ddj7qW8Wlc6B3Wp4f7W3plH1L1nM0C8V2V_vh93z03Jf1hlKss04&amp;source=gmail&amp;ust=1731167611684000&amp;usg=AOvVaw3lomaOkiBhRdbFQKpzRm2g">https://x.com/kenn/status/<wbr>1844601018597900423</a></p>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                    
                    <tr>
                        <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;padding:40px 20px;border:1px solid #e2e2e2">
                            <h2 style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:28px;font-weight:300;color:#000000;line-height:1.4;margin:0 0 20px 0">
                                Company Updates</h2>
                            
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody><tr>
                                    <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word">
                                        <div style="display:inline-block;padding:8px 12px;font-family:'Courier New',monospace;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:0.2px;background-color:#f4f0ff;color:#8a05ff">
                                            Podcast</div>
                                        <h3 style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:500;color:#000000;text-decoration:underline;line-height:1.4;margin:10px 0">
                                            <a style="color:#000000" href="https://d2xMk204.na1.hubspotlinks.com/Ctc/GG+113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7x3m2ndW6N1vHY6lZ3psW1wydD64c0s-3W7LvQn87DMY7lW3FqLp338WNcVW54pyLH6QW4lPW9k1fbH6r57LBW1yZygP1l2NdSN8tVckkLQNH7W3ncFt67CDH2LW4Z-8Ln5qkDXGW46xsTB94H03KN6n2RSRgS3HFW1jb0_l5c5B8bVLSXpv4Q8CzzW5bMjn62WcTycW6522_w4rgl83W6k_Y393Hb42mW5G5w2p66Q2FzW13yHpH3q1Ly6W1qvK9Y76Sx6cW7858R47cGqJNF58jR6V2zrbW8bR_rd5PRDr_f2-jYlR04" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://d2xMk204.na1.hubspotlinks.com/Ctc/GG%2B113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7x3m2ndW6N1vHY6lZ3psW1wydD64c0s-3W7LvQn87DMY7lW3FqLp338WNcVW54pyLH6QW4lPW9k1fbH6r57LBW1yZygP1l2NdSN8tVckkLQNH7W3ncFt67CDH2LW4Z-8Ln5qkDXGW46xsTB94H03KN6n2RSRgS3HFW1jb0_l5c5B8bVLSXpv4Q8CzzW5bMjn62WcTycW6522_w4rgl83W6k_Y393Hb42mW5G5w2p66Q2FzW13yHpH3q1Ly6W1qvK9Y76Sx6cW7858R47cGqJNF58jR6V2zrbW8bR_rd5PRDr_f2-jYlR04&amp;source=gmail&amp;ust=1731167611684000&amp;usg=AOvVaw1oSQpxwRtci2pEfIRYSsTX">Rendering the future of the cloud</a></h3>
                                        <p style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.4;color:#272727;margin:0">
                                            Our founder Anurag Goel talked to Joel Beasley of the Modern CTO podcast
                                            about unlocking the full potential of cloud infrastructure, and how Render
                                            is dramatically simplifying service orchestration for developers.</p>
                                    </td>
                                </tr>
                            </tbody></table>
                            
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top:30px">
                                <tbody><tr>
                                    <td style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word">
                                        <div style="display:inline-block;padding:8px 12px;font-family:'Courier New',monospace;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:0.2px;background-color:#f4f0ff;color:#8a05ff">
                                            Work at Render</div>
                                        <h3 style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:18px;font-weight:500;color:#000000;text-decoration:underline;line-height:1.4;margin:10px 0">
                                            <a style="color:#000000" href="https://d2xMk204.na1.hubspotlinks.com/Ctc/GG+113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7x3m2ndW6N1vHY6lZ3nJW5vckKH5Q-sykN2H8XTpRBxflW73phk-3PfytfW24JTyQ63CRX7W2lXdw64C3WcVW4kltvP5NmpNdW3dtKxv1HSM7CW3Zpz_M3jKCQlV8FJTY5_6HrLN995PsXFCyB4W25Jsyr847y45W1Pmrvc4ZCdjGW4lxt0v5LHXRTW1Xv8P25w578LW4wTbHZ24qHm3W5M1ZMd6vhlY1N2wf6YcVBHN8W8_R3xg60hFl-W1j_jdq2-wlmSW77ppZr6n9MjlW3mSCKQ18K-1sW1XXrnd7QQvpSf8zyddW04" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://d2xMk204.na1.hubspotlinks.com/Ctc/GG%2B113/d2xMk204/VWp1Ms2hHbtbW4NWqm_3V3MMQW2lg-cV5n5ckYN3Bm-7x3m2ndW6N1vHY6lZ3nJW5vckKH5Q-sykN2H8XTpRBxflW73phk-3PfytfW24JTyQ63CRX7W2lXdw64C3WcVW4kltvP5NmpNdW3dtKxv1HSM7CW3Zpz_M3jKCQlV8FJTY5_6HrLN995PsXFCyB4W25Jsyr847y45W1Pmrvc4ZCdjGW4lxt0v5LHXRTW1Xv8P25w578LW4wTbHZ24qHm3W5M1ZMd6vhlY1N2wf6YcVBHN8W8_R3xg60hFl-W1j_jdq2-wlmSW77ppZr6n9MjlW3mSCKQ18K-1sW1XXrnd7QQvpSf8zyddW04&amp;source=gmail&amp;ust=1731167611684000&amp;usg=AOvVaw1DplsDCZ8DjfUYQ5EEYTf_">Databases solutions architect</a></h3>
                                        <p style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.4;color:#272727;margin:0">
                                            As a first-in-role, lay the foundation for how Render supports its
                                            PostgreSQL and Redis customers through every phase of adoption—from
                                            onboarding to hypergrowth.</p>
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>   
                </tbody></table>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="m_6638210915932899506hs_padded" style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;padding:10px 20px"><div id="m_6638210915932899506hs_cos_wrapper_module_17304762527001" style="color:inherit;font-size:inherit;line-height:inherit"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;font-size:12px;line-height:135%;color:#23496d;margin-bottom:0;padding:0">
  <tbody>
    <tr>
      <td align="center" valign="top" style="font-family:Arial,sans-serif;font-size:15px;color:#000000;word-break:break-word;text-align:center;margin-bottom:0;line-height:135%;padding:10px 20px">
        <p style="font-family:arial,helvetica,sans-serif;font-size:12px;font-weight:normal;text-decoration:none;font-style:normal;color:#23496d">
          Render, Inc., 525 Brannan St., San Francisco, California
        </p>
        <p>
          <a href="https://hs-21532664.s.hubspotemail.net/hs/preferences-center/en/direct?data=W2nXS-N30h-M1W23rzzj1NtzRJW21hpfg36DjG7W3P8MKF1LBFnlW2Tl6353GJc-JW2zMWW53K72RyW366c-12vMzBfW2xJTv82YLgRtW1Q9-s54hvdCwW49CfD_2HYLbMW1SfyY23SNv_lW32kqJt4htm4RW4tBsCZ43lDK6W3LFhHr1QwTThW3NF3bv2HJqL3W2vxS3h2-HBT6W4r6ffL3H3-QTW2Ft9BS3GMtdwW1VsxHs41qCs3W3Hf90m3QSrWFW2-9Y-p2sLrSfW3XGm_Y3_YKbTW3jpmYL4plZwpW3f-jsr3ZD3fFW3z8mQb2KHmthW2sN7751LmXXGW3yWBHk1LHF-2W3K72zL3M9Sg_W2CTzMj1LyzPsW2vJ_qY4hvyD5W4fPzLW4mFtkXW1_r3mQ2r5cnxW3DMMZk3Y26pnW49kDP03SLqWPW3N-NP62Tl5sGW2YD4C81Q49WXW3JWGNP4r9yQnW4mnns43JJSlcW1Q4CnN4frxNKW3Hdj3f1_4QY8W3F8n762MF2-FW3GJ8Sc4mJvKnW24WZqB24T1S-W1LB8d61XvmPPW3VG4d94th9jyW2RldSg1L6g2DW2WJqB91LxFXV0&amp;utm_source=hs_email&amp;utm_medium=email&amp;utm_content=332826198&amp;_hsenc=p2ANqtz-89mB0qwvpOxGMMpLmVd0RXtHGkeqGyDE9jsbRhsvnkorF0N2iRG-9f2e2RCdgzzRLSZxqC9tP-eq2hCdgnXSpNoYn77Q&amp;_hsmi=332826198" style="font-family:Helvetica,Arial,sans-serif;font-size:12px;color:#8a05ff;font-weight:normal;text-decoration:underline;font-style:normal" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://hs-21532664.s.hubspotemail.net/hs/preferences-center/en/direct?data%3DW2nXS-N30h-M1W23rzzj1NtzRJW21hpfg36DjG7W3P8MKF1LBFnlW2Tl6353GJc-JW2zMWW53K72RyW366c-12vMzBfW2xJTv82YLgRtW1Q9-s54hvdCwW49CfD_2HYLbMW1SfyY23SNv_lW32kqJt4htm4RW4tBsCZ43lDK6W3LFhHr1QwTThW3NF3bv2HJqL3W2vxS3h2-HBT6W4r6ffL3H3-QTW2Ft9BS3GMtdwW1VsxHs41qCs3W3Hf90m3QSrWFW2-9Y-p2sLrSfW3XGm_Y3_YKbTW3jpmYL4plZwpW3f-jsr3ZD3fFW3z8mQb2KHmthW2sN7751LmXXGW3yWBHk1LHF-2W3K72zL3M9Sg_W2CTzMj1LyzPsW2vJ_qY4hvyD5W4fPzLW4mFtkXW1_r3mQ2r5cnxW3DMMZk3Y26pnW49kDP03SLqWPW3N-NP62Tl5sGW2YD4C81Q49WXW3JWGNP4r9yQnW4mnns43JJSlcW1Q4CnN4frxNKW3Hdj3f1_4QY8W3F8n762MF2-FW3GJ8Sc4mJvKnW24WZqB24T1S-W1LB8d61XvmPPW3VG4d94th9jyW2RldSg1L6g2DW2WJqB91LxFXV0%26utm_source%3Dhs_email%26utm_medium%3Demail%26utm_content%3D332826198%26_hsenc%3Dp2ANqtz-89mB0qwvpOxGMMpLmVd0RXtHGkeqGyDE9jsbRhsvnkorF0N2iRG-9f2e2RCdgzzRLSZxqC9tP-eq2hCdgnXSpNoYn77Q%26_hsmi%3D332826198&amp;source=gmail&amp;ust=1731167611685000&amp;usg=AOvVaw2yU8unu2AcD0nBdP8lp-ml">Unsubscribe</a>
          <a href="https://hs-21532664.s.hubspotemail.net/hs/preferences-center/en/page?data=W2nXS-N30h-M1W23rzzj1NtzRJW21hpfg36DjG7W3P8MKF1LBFnlW2Tl6353GJc-JW2zMWW53K72RyW366c-12vMzBfW2xJTv82YLgRtW1Q9-s54hvdCwW49CfD_2HYLbMW1SfyY23SNv_lW32kqJt4htm4RW4tBsCZ43lDK6W3LFhHr1QwTThW3NF3bv2HJqL3W2vxS3h2-HBT6W4r6ffL3H3-QTW2Ft9BS3GMtdwW1VsxHs41qCs3W3Hf90m3QSrWFW2-9Y-p2sLrSfW3XGm_Y3_YKbTW3jpmYL4plZwpW3f-jsr3ZD3fFW3z8mQb2KHmthW2sN7751LmXXGW3yWBHk1LHF-2W3K72zL3M9Sg_W2CTzMj1LyzPsW2vJ_qY4hvyD5W4fPzLW4mFtkXW1_r3mQ2r5cnxW3DMMZk3Y26pnW49kDP03SLqWPW3N-NP62Tl5sGW2YD4C81Q49WXW3JWGNP4r9yQnW4mnns43JJSlcW1Q4CnN4frxNKW3Hdj3f1_4QY8W3F8n762MF2-FW3GJ8Sc4mJvKnW24WZqB24T1S-W1LB8d61XvmPPW3VG4d94th9jyW2RldSg1L6g2DW2WJqB91LxFXV0&amp;utm_source=hs_email&amp;utm_medium=email&amp;utm_content=332826198&amp;_hsenc=p2ANqtz-89mB0qwvpOxGMMpLmVd0RXtHGkeqGyDE9jsbRhsvnkorF0N2iRG-9f2e2RCdgzzRLSZxqC9tP-eq2hCdgnXSpNoYn77Q&amp;_hsmi=332826198" style="font-family:Helvetica,Arial,sans-serif;font-size:12px;color:#8a05ff;font-weight:normal;text-decoration:underline;font-style:normal" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://hs-21532664.s.hubspotemail.net/hs/preferences-center/en/page?data%3DW2nXS-N30h-M1W23rzzj1NtzRJW21hpfg36DjG7W3P8MKF1LBFnlW2Tl6353GJc-JW2zMWW53K72RyW366c-12vMzBfW2xJTv82YLgRtW1Q9-s54hvdCwW49CfD_2HYLbMW1SfyY23SNv_lW32kqJt4htm4RW4tBsCZ43lDK6W3LFhHr1QwTThW3NF3bv2HJqL3W2vxS3h2-HBT6W4r6ffL3H3-QTW2Ft9BS3GMtdwW1VsxHs41qCs3W3Hf90m3QSrWFW2-9Y-p2sLrSfW3XGm_Y3_YKbTW3jpmYL4plZwpW3f-jsr3ZD3fFW3z8mQb2KHmthW2sN7751LmXXGW3yWBHk1LHF-2W3K72zL3M9Sg_W2CTzMj1LyzPsW2vJ_qY4hvyD5W4fPzLW4mFtkXW1_r3mQ2r5cnxW3DMMZk3Y26pnW49kDP03SLqWPW3N-NP62Tl5sGW2YD4C81Q49WXW3JWGNP4r9yQnW4mnns43JJSlcW1Q4CnN4frxNKW3Hdj3f1_4QY8W3F8n762MF2-FW3GJ8Sc4mJvKnW24WZqB24T1S-W1LB8d61XvmPPW3VG4d94th9jyW2RldSg1L6g2DW2WJqB91LxFXV0%26utm_source%3Dhs_email%26utm_medium%3Demail%26utm_content%3D332826198%26_hsenc%3Dp2ANqtz-89mB0qwvpOxGMMpLmVd0RXtHGkeqGyDE9jsbRhsvnkorF0N2iRG-9f2e2RCdgzzRLSZxqC9tP-eq2hCdgnXSpNoYn77Q%26_hsmi%3D332826198&amp;source=gmail&amp;ust=1731167611685000&amp;usg=AOvVaw3S4lkkJfpJwZ-pcoQTmbDA">Manage preferences</a>
        </p>
      </td>
    </tr>
  </tbody>
</table></div></td></tr></tbody></table>


    
    
   
      
   
  
          </td>
        </tr>
      </tbody></table>
    </div>
  
</div></div>`}
        />
      </div>
      <div className="absolute bottom-2 w-full">
        {isVisible && <Mailinput onExitComplete={handleExitComplete} />}
        {!isVisible && (
          <Button
            variant="outline"
            className="flex flex-row"
            onClick={toggleReply}
          >
            <Reply size={20} className="mr-1" /> Reply
          </Button>
        )}
      </div>
    </div>
  );
};

export default Mailcontent;
